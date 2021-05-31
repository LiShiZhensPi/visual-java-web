//express_demo.js 文件
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const exec = require("child_process");

function parseResult(result) {
  var lines = result.split("\r\n");
  var jvm_infos = [];

  if (lines[0] != "jvm inited success") throw "can'find jvm inited success";

  var i = 1;
  while (lines[i] != "jvm end") {
    console.log(lines[i++]);
    var jvm_info = {};
    console.log(lines[i++]);
    var classfile_count = parseInt(lines[i++].slice(17));
    jvm_info.classfiles = [];
    for (var j = 0; j < classfile_count; j++) {
      var classfile = {};
      classfile.name = lines[i++];
      classfile.magic_code = lines[i++].slice(12);
      classfile.minor_version = lines[i++].slice(15);
      classfile.major_version = lines[i++].slice(15);
      var constant_pool_count = parseInt(lines[i++].slice(21));
      classfile.constant_pools = [];
      for (var k = 1; k < constant_pool_count; k++)
        classfile.constant_pools.push(lines[i++]);
      classfile.accessFlags = [];
      lines[i++]
        .split(" ")
        .slice(1)
        .forEach((flag) => {
          classfile.accessFlags.push(flag);
        });
      // classfile.accessFlags.push(classfile.accessFlags.pop());
      classfile.this_class = parseInt(lines[i++].slice(12));
      classfile.super_class = parseInt(lines[i++].slice(13));
      classfile.field_count = parseInt(lines[i++].slice(13));
      classfile.fields = [];
      for (var k = 0; k < classfile.field_count; k++) {
        var field = {};
        console.log(lines[i++]);
        field.accessFlags = [];
        lines[i++]
          .split(" ")
          .slice(1)
          .forEach((flag) => {
            field.accessFlags.push(flag);
          });
        // field.accessFlags.push(field.accessFlags.pop().slice(0, -1));
        field.name_index = parseInt(lines[i++].slice(12));
        field.descriptor_index = parseInt(lines[i++].slice(18));
        classfile.fields.push(field);
      }
      classfile.method_count = parseInt(lines[i++].slice(14));
      classfile.methods = [];
      for (var k = 0; k < classfile.method_count; k++) {
        var method = {};
        console.log(lines[i++]);
        method.accessFlags = [];
        lines[i++]
          .split(" ")
          .slice(1)
          .forEach((flag) => {
            method.accessFlags.push(flag);
          });
        // method.accessFlags.push(method.accessFlags.pop().slice(0, -1));
        method.name_index = parseInt(lines[i++].slice(12));
        method.descriptor_index = parseInt(lines[i++].slice(18));
        method.max_stack = parseInt(lines[i].split(" ")[1]);
        method.max_local = parseInt(lines[i++].split(" ")[3]);
        method.code_length = parseInt(lines[i++].slice(13));
        method.codes = [];
        for (var c = 0; c < method.code_length; c++) {
          method.codes.push(lines[i++]);
        }
        classfile.methods.push(method);
      }
      jvm_info.classfiles.push(classfile);
    }
    console.log(lines[i++]);
    jvm_info.threads = [];
    var threads_count = parseInt(lines[i++].slice(14));
    for (var j = 0; j < threads_count; j++) {
      console.log(lines[i++]);
      var thread = {};
      thread.pc = parseInt(lines[i++].slice(3));
      thread.stack_size = lines[i++].slice(11);
      thread.stack = [];
      for (var k = 0; k < thread.stack_size; k++) {
        var stackFrame = {};
        stackFrame.class_name = lines[i++].slice(12);
        stackFrame.method_name = lines[i++].slice(13);
        stackFrame.method_descriptor = lines[i++].slice(19);
        stackFrame.code_length = parseInt(lines[i++].slice(12));
        stackFrame.codes = [];
        for (var c = 0; c < stackFrame.code_length; c++)
          stackFrame.codes.push(lines[i++]);
        stackFrame.op_stack_length = parseInt(lines[i++].slice(16));
        stackFrame.op_stack = [];
        for (var c = 0; c < stackFrame.op_stack_length; c++)
          stackFrame.op_stack.push(lines[i++]);
        stackFrame.local_vars_length = parseInt(lines[i++].slice(18));
        stackFrame.local_vars = [];
        for (var c = 0; c < stackFrame.local_vars_length; c++)
          stackFrame.local_vars.push(lines[i++]);
        thread.stack.push(stackFrame);
      }

      jvm_info.threads.push(thread);
    }
    jvm_infos.push(jvm_info);
  }

  return jvm_infos;
}

function getClassName(code) {
  const classIndex = code.indexOf("class");
  if (code.charAt(classIndex + 5) != " ") return null;
  var begin = 0;
  var end = 0;
  for (var i = classIndex + 5; i < code.length; i++) {
    if (code.charAt(i) != " " && code.charAt(i) != "\n") {
      begin = i;
      break;
    }
  }
  for (var i = begin + 1; i < code.length; i++) {
    if (
      code.charAt(i) == " " ||
      code.charAt(i) == "\n" ||
      code.charAt(i) == "{"
    ) {
      end = i;
      break;
    }
  }

  return code.substr(begin, end - begin);
}

var app = express();
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/upload", (req, res) => {
  //返回数据 code：0 成功 1 写文件错误 2 编译错误 3 执行错误

  var data = req.body;
  const className = getClassName(data.code);
  if (className == null) {
    res.send({
      code: 1,
      msg: "can't find class",
    });
    return;
  }
  const basePath = "get_files/";
  const javaFile = basePath + className + ".java";

  try {
    console.log("writing file " + javaFile);
    fs.writeFileSync(javaFile, data.code);
    console.log("code has been writed to " + javaFile);
  } catch (err) {
    // console.log(err);
    console.log("write file failed");
    res.send({
      code: 1,
      msg: "write file failed",
    });
    return;
  }

  const cmd = "javac " + javaFile;

  try {
    console.log("execing cmd :" + cmd);
    exec.execSync(cmd);
    console.log("exec cmd success");
  } catch (err) {
    console.log("exec cmd javac failed");
    res.send({
      code: 2,
      msg: "compile failed",
    });
    return;
  }

  const cmd2 =
    "D:\\Code\\Visual-Java\\build\\gava.exe -cp D:\\code\\visual-java-server\\get_files " +
    className;
  try {
    console.log("execing cmd: " + cmd2);
    const result = exec.execSync(cmd2).toString("utf8");
    const jvm_infos = parseResult(result);
    console.log("exec cmd success");
    // console.log(result);
    res.send({
      code: 0,
      data: jvm_infos,
    });
    return;
  } catch (err) {
    console.log("exec cmd gava faile");
    res.send({
      code: 3,
      msg: "exe cmd gava failed",
    });
  }
});

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("hello Get");
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
