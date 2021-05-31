<template>
  <div class="code-editer">
    <codemirror class="input" v-model="code" :options="cmOptions"> </codemirror>
    <div class="select-button">
      <el-select
        id="select"
        v-model="value"
        placeholder="选择示例"
        @change="changeCode"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="button">
        <el-button id="jvm_run" icon="el-icon-caret-right" @click="submit">
        </el-button>
      </div>
    </div>
  </div>
</template>
<style>
.input {
  border-style: solid;
}
.code-editer {
  width: 700px;
  margin: 0 auto;
}

.select-button {
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
}

.button {
  margin-left: 10px;
}

#select:focus {
  color: black;
  border-color: black;
  background-color: white;
}

#select:hover {
  color: black;
  border-color: black;
  background-color: white;
}

#jvm_run:focus {
  color: black;
  border-color: black;
  background-color: white;
}
#jvm_run:hover {
  color: black;
  border-color: black;
  background-color: white;
}
</style>

<script>
import { codemirror } from "vue-codemirror";
import axios from "axios";
// import base style
import "codemirror/lib/codemirror.css";
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/theme/idea.css";

export default {
  components: {
    codemirror,
  },
  data() {
    return {
      code: "//Write your java code here",
      cmOptions: {
        mode: "text/x-java", //Java语言
        theme: "idea", // 默认主题
        autofocus: true,
        lineNumbers: true, //显示行号
        smartIndent: true, // 自动缩进
        autoCloseBrackets: true, // 自动补全括号
      },
      options: [
        {
          value: "TestAdd",
        },
        {
          value: "TestFor",
        },
        {
          value: "TestObj",
        },
        {
          value: "TestFeb",
        },
      ],
    };
  },
  methods: {
    changeCode(value) {
      const templates = {
        TestAdd: `public class TestAdd {
    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        int c = a + b;
        float f1 = 1;
        float f2 = 2;
        float f3 = f1 + f2;
    }
}`,
        TestFor: `public class Testfor {
    public static void main(String[] args) {
        int sum = 0;
        for(int i = 1;i<=10;i++)
            sum+=i;
    }
}`,
        TestObj: `class TestObj {
  int add(int a, int b) {
    return a + b;
  }

  int del(int a, int b) {
    return a - b;
  }

  public static void main(String[] args) {
    int a = 1;
    int b = 2;
    TestObj obj = new TestObj();
    int c = obj.add(a, b);
    int d = obj.del(a, b);
  }
}`,
        TestFeb: `public class TestFeb {
  static int f(int n) {
    if (n == 1 | n == 2)
      return 1;
    else
      return f(n - 1) + f(n - 2);
  }

  public static void main(String[] args) {
    int s = f(6);
  }
}`,
      };
      this.$data.code = templates[value];
    },
    submit() {
      console.log("submit");
      axios
        .post("http://localhost:8081/upload", {
          code: this.$data.code,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === 0) {
            window.sessionStorage.setItem(
              "jvminfos",
              JSON.stringify(response.data.data)
            );
            this.$router.push("/jvm");
          } else {
            this.$message(response.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message("network error");
        });
    },
  },
  // computed: {
  //   codemirror() {
  //     return this.codemirror;
  //   },
  // },
  // mounted() {
  //   console.log("the current CodeMirror instance object:", this.codemirror);
  //   // you can use this.codemirror to do something...
  // },
};
</script>
