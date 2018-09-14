<template>
  <div class="comB">
    <button @click="reduce">-</button>
    <strong>{{$store.state.count}}</strong>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {


  methods: {
    reduce(){
       this.$store.commit('REDUCE_COUNT')
    },
    //触发自定义函数
    add(){

      this.$store.commit('ADD_COUNT')
    }
  }
}
</script>

<style>
.comB{
  margin-left: 20px;
}
 button{
   width: 50px;
   height: 50px;
 }
 strong{
   font-size: 30px
 }
</style>
