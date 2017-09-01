<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>count：{{ count }}</h2>
    <a href="javascript:void(0);" v-on:click="increment">increment</a>
    <router-link to="/test">to 测试</router-link>
  </div>
</template>
  
<script>
export default {
  name: 'hello',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
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
