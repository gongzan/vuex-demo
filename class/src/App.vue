<template>
  <div id="app">
    小米9数量：{{count}}
    <br/>
    <!-- {{$store.getters.doubleCount}} -->
    <br/>
    <button :disabled="!count" @click="$store.commit('increment1')">购买一个</button>
    <button :disabled="count==1||count==0" @click="$store.commit('increment',2)">购买两个</button>
    <!-- <button @click="$store.dispatch('increment2')">count++</button> -->
  </div>
</template>

<script>
export default {
  name:'App',
  computed:{
    count(){
      return this.$store.state.count
    }
  }
}
</script>