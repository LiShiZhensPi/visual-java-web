<template>
<div class="code-editer">
  <codemirror
    ref="cmEditor"
    :value="code"
    :options="cmOptions"
    @ready="onCmReady"
    @focus="onCmFocus"
    @input="onCmCodeChange"
  />
  <el-button type="primary" @click="submit">
    提交
  </el-button>
</div>
  
</template>

<script>
import { codemirror } from "vue-codemirror";
import axios from "axios"
// import base style
import "codemirror/lib/codemirror.css";
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/theme/material.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/darcula.css"




export default {
  components: {
    codemirror,
  },
  data() {
    return {
      code: "System.out.println(\"hello\")",
      cmOptions: {
        mode: "text/x-java", //Java语言
        theme: "darcula", // 默认主题
        autofocus: true,
        lineNumbers: true, //显示行号
        smartIndent: true, // 自动缩进
        autoCloseBrackets: true, // 自动补全括号
      },
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focused!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    },
    submit(){
      console.log("submit")
      axios.post("http://localhost:8081/upload",{
        code:this.$data.code,
        name:"Test"
      }).then(response=>{
        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      })
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror;
    },
  },
  mounted() {
    console.log("the current CodeMirror instance object:", this.codemirror);
    // you can use this.codemirror to do something...
  },
};
</script>