<template>
  <div class="home">
    <CodeEditer>
    </CodeEditer>

  </div>
</template>

<style>

</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CodeEditer from '@/components/CodeEditer.vue'

export default {
  name: 'Home',
  components: {
    CodeEditer
  }
}
</script>
