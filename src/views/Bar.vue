<template>
<div>
    <h4>bar组件</h4>
    <p>{{$store.state.count}}</p>
    <button @click="$store.commit('substructor')">-</button>
    <div ref="123"></div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
