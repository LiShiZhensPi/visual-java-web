<template>
  <div class="code-editer">
    <codemirror class="input" v-model="code" :options="cmOptions"> </codemirror>
    <div class="select-button">
      <el-select
        class="select"
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
        <el-button class="button" @click="submit"> Run </el-button>
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
      code:"//Write your java code here",
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
      ],
    };
  },
  methods: {
    changeCode(value) {
      const templates = {
        TestAdd: `class TestAdd{
    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        int c = a+b;
    }
}`,
        TestFor: `public class Testfor {
    public static void main(String[] args) {
        int sum = 0;
        for(int i = 1;i<=10;i++)
            sum+=i;
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
          name: "Test",
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.code == 0) {
            this.$router.replace("/jvm")
          }
        })
        .catch((error) => {
          console.log(error);
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