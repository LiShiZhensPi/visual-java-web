<template>
  <div class="jvm">
    <el-row>
      <el-col style="height: 100%;" :span="10"
        ><el-button
          plain
          id="jvm_button"
          class="jvm_button_left"
          icon="el-icon-arrow-left"
          style="margin-top: 23px;"
          @click="back()"
        ></el-button
      ></el-col>
      <el-col :span="4" style="text-align: center;">
        <h1>Visual-Java</h1>
      </el-col>
      <el-col style="height: 90px;" :span="10"
        ><el-button
          plain
          id="jvm_button"
          class="jvm_button_right"
          icon="el-icon-arrow-right"
          style="margin-top: 23px;"
          @click="next()"
        ></el-button
      ></el-col>
    </el-row>

    <el-row class="classfile-table" style="margin-left: 35px;">
      <el-col :span="3" class="title1"
        ><div class="table-title">
          classfiles
        </div></el-col
      >
      <el-col :span="3" class="title1"
        ><div class="table-title">
          base
        </div></el-col
      >
      <el-col :span="8" class="title1"
        ><div class="table-title">
          constantPool
        </div></el-col
      >
      <el-col :span="2" class="title1"
        ><div class="table-title">
          method
        </div></el-col
      >
      <el-col :span="3" class="title1"
        ><div class="table-title">
          method_info
        </div></el-col
      >
      <el-col :span="2" class="title1"
        ><div class="table-title">
          code
        </div></el-col
      >
    </el-row>
    <el-row class="classfile" style="margin-left: 35px;">
      <el-col :span="3" class="table1">
        <div class="list">
          <div
            class="list-item"
            v-for="(classfile, index) in jvminfo.classfiles"
            :key="index"
            @click="currentClassfile = classfile"
          >
            {{ classfile.name }}
          </div>
        </div></el-col
      >
      <el-col :span="3" class="table1">
        <div class="list">
          <div>magic_code : {{ currentClassfile.magic_code }}</div>
          <div>major_version : {{ currentClassfile.major_version }}</div>
          <div>minor_version : {{ currentClassfile.minor_version }}</div>
          <div>this_class : {{ currentClassfile.this_class }}</div>
          <div>super_class : {{ currentClassfile.super_class }}</div>
          <div>accessFlags :</div>
          <div
            v-for="(flag, index) in currentClassfile.accessFlags"
            :key="index"
          >
            {{ flag }}
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="table1">
        <div class="list">
          <div
            v-for="(constantPool, index) in currentClassfile.constant_pools"
            :key="index"
          >
            {{ constantPool }}
          </div>
        </div>
      </el-col>

      <el-col :span="2" class="table1">
        <div class="list">
          <div
            class="list-item"
            v-for="count in currentClassfile.methods.length"
            :key="count"
            @click="currentMethod = currentClassfile.methods[count - 1]"
          >
            method_{{ count }}
          </div>
        </div>
      </el-col>
      <el-col :span="3" class="table1">
        <div class="list">
          <div>name_index : {{ currentMethod.name_index }}</div>
          <div>descriptor_index : {{ currentMethod.descriptor_index }}</div>
          <div>max_stack : {{ currentMethod.max_stack }}</div>
          <div>max_local : {{ currentMethod.max_local }}</div>
          <div>accessFlags :</div>
          <div v-for="(flag, index) in currentMethod.accessFlags" :key="index">
            {{ flag }}
          </div>
        </div>
      </el-col>
      <el-col :span="2" class="table1">
        <div class="list">
          <div v-for="(code, index) in currentMethod.codes" :key="index">
            {{ code }}
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="thread-table">
      <el-col :span="4" class="title2" style="margin-left: 40px;">
        <div class="table-title">pc</div>
      </el-col>
      <el-col :span="6" class="title2">
        <div class="table-title">vmStack</div>
      </el-col>
      <el-col :span="2" class="title2">
        <div class="table-title">bytecode</div>
      </el-col>
      <el-col :span="3" class="title2">
        <div class="table-title">code_info</div>
      </el-col>
      <el-col :span="3" class="title2">
        <div class="table-title">opStack</div>
      </el-col>
      <el-col :span="3" class="title2">
        <div class="table-title">loaclVars</div>
      </el-col>
    </el-row>
    <el-row class="thread">
      <el-col
        class="table2"
        style="text-align: center;margin-left: 40px;"
        :span="4"
      >
        <h1 style="font-size: 70px;">{{ currentThread.pc }}</h1>
      </el-col>
      <el-col class="table2" :span="6">
        <div class="list2">
          <div
            class="list-item"
            v-for="(frame, index) in currentThread.stack"
            :key="index"
            @click="currentFrame = frame"
          >
            {{ frame.class_name }}____{{ frame.method_name }}____
            {{ frame.method_descriptor }}
          </div>
        </div>
      </el-col>
      <el-col :span="2" class="table2">
        <div class="list2">
          <div v-for="(code, index) in currentFrame.codes" :key="index">
            {{ code }}
          </div>
        </div>
      </el-col>
      <el-col class="table2" :span="3">
        <div class="list2">
          <div>opcode : {{ code_name }}</div>
          <div>code_length : {{ code_length }}</div>
          <p>{{ code_descripter }}</p>
        </div>
      </el-col>
      <el-col class="table2" :span="3">
        <div class="list2">
          <div v-for="(op, index) in currentFrame.op_stack" :key="index">
            {{ op }}
          </div>
        </div>
      </el-col>
      <el-col class="table2" :span="3">
        <div class="list2">
          <div
            v-for="(local_var, index) in currentFrame.local_vars"
            :key="index"
          >
            {{ local_var }}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
#jvm_button:focus {
  color: black;
  border-color: black;
  background-color: white;
}
#jvm_button:hover {
  color: black;
  border-color: black;
  background-color: white;
}

.table-title {
  background-color: grey;
  text-align: center;
}

.jvm {
  width: 1500px;
  height: 700px;
  border: #333333 solid;
  margin: auto;
}
.jvm_button_right {
  float: left;
}
.jvm_button_left {
  float: right;
}
.table1 {
  height: 310px;
  margin-left: 20px;
  border: #333333 solid;
}

.title1 {
  margin-left: 20px;
}
.table2 {
  height: 220px;
  margin-left: 20px;
  border: #333333 solid;
}

.title2 {
  margin-left: 20px;
  margin-top: 20px;
}

.list {
  padding: 10px;
  overflow: auto;
  height: 280px;
}

.list2 {
  padding: 10px;
  overflow: auto;
  height: 190px;
}

.list-item {
  cursor: pointer;
}
</style>

<script>
import { get_length, get_name, get_descripter } from "../utils/util.js";
export default {
  name: "Jvm",
  components: {},
  data() {
    return {
      jvminfos: "",
      jvminfo: "",
      index: "",
      currentClassfile: "",
      currentThread: "",
      currentFrame: "",
      currentMethod: "",
      code_name: "",
      code_length: "",
      code_descripter: "",
    };
  },
  methods: {
    next() {
      console.log("next");
      if (this.index == this.jvminfos.length - 1) {
        this.$message("Jvm Ended");
        return;
      }
      this.index++;
      this.jvminfo = this.jvminfos[this.index];
      this.currentMethod = this.currentClassfile.methods[0];
      this.currentThread = this.jvminfo.threads[0];
      this.currentFrame = this.currentThread.stack[0];
      if (this.currentFrame.codes[this.currentThread.pc][0] != "-")
        this.currentFrame.codes[this.currentThread.pc] =
          "->" + this.currentFrame.codes[this.currentThread.pc];
      var code = this.currentFrame.codes[this.currentThread.pc].slice(2);
      this.code_name = get_name(code);
      this.code_length = get_length(code);
      this.code_descripter = get_descripter(code);
    },
    back() {
      console.log("back");
      // var jvminfos = this.jvminfos;
      // console.log(jvminfos);
      if (this.index == 0) {
        this.$message("No previous");
        return;
      }
      this.index--;
      this.jvminfo = this.jvminfos[this.index];
      this.currentMethod = this.currentClassfile.methods[0];
      this.currentThread = this.jvminfo.threads[0];
      this.currentFrame = this.currentThread.stack[0];
      // this.currentFrame.codes[this.currentThread.pc] =
      //   "->" + this.currentFrame.codes[this.currentThread.pc];
      var code = this.currentFrame.codes[this.currentThread.pc].slice(2);
      this.code_name = get_name(code);
      this.code_length = get_length(code);
      this.code_descripter = get_descripter(code);
    },
  },
  mounted() {
    this.jvminfos = JSON.parse(window.sessionStorage.getItem("jvminfos"));
    this.index = 0;
    this.jvminfo = this.jvminfos[this.index];
    this.currentClassfile = this.jvminfo.classfiles[0];
    this.currentMethod = this.currentClassfile.methods[0];
    this.currentThread = this.jvminfo.threads[0];
    this.currentFrame = this.currentThread.stack[0];
    if (this.currentFrame.codes[this.currentThread.pc][0] != "-")
      this.currentFrame.codes[this.currentThread.pc] =
        "->" + this.currentFrame.codes[this.currentThread.pc];
    var code = this.currentFrame.codes[this.currentThread.pc].slice(2);
    this.code_name = get_name(code);
    this.code_length = get_length(code);
    this.code_descripter = get_descripter(code);
  },
};
</script>
