<template>
  <div class="home">
    <h1 class="title">Visual-Java</h1>
    <CodeEditer> </CodeEditer>
  </div>
</template>

<style>
.title{
  font-size:60px;
  text-align: center;
  color:#333333;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CodeEditer from "@/components/CodeEditer.vue";

export default {
  name: "Home",
  components: {
    CodeEditer,
  },
};
</script>
