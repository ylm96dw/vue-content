<template>
  <div>
    <h1>
      小计：{{$store.getters.totalPrice}}
    </h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
// import bus from '../bus'
export default {
  data (){
    return {
      msg:''
    }
  },
  //监听  类似与观察者模式 bus跨级组件通信
  created(){
    this.$bus.$on('toData',(msg)=>{
      this.msg = msg
    })
  },
  // props:{
  //   count:{
  //     type:Number
  //   },
  //   price:{
  //     type:Number
  //   }
  // },
  computed: {
    // total(){
    //   return this.$store.state.count * this.$store.state.price
    // }
  }
}
</script>

<style>

</style>
