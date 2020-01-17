<template>
<div>
  <h4>foo组件</h4>
  <p>{{$store.state.count}}</p>
  <button @click="$store.commit('add')">+</button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
