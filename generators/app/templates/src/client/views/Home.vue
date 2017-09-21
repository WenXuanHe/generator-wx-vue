<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="javascript:void(0);" v-on:click="increment">increment</a>
    <router-link to="/test">to 测试</router-link>
  </div>
</template>

<script>
import {asyncData} from '$utils/index'

export default {
  name: 'hello',
  asyncData:asyncData,
  methods: {
    increment: function () {
      this.$store.commit('increment')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">

</style>
