<template>
  <div >
    <!-- <h1>我是首页</h1> -->
    <!-- //有查询字符串 -->
    <!-- <router-link :to="{path:'/login',query:{
      userinfo:'name is shangmu'
    }}">跳转到登录</router-link> -->
    <div style="border:1px solid #000; display:flex">
      <comA ></comA>
      <comB ></comB>
      <h2>单价：{{this.$store.state.price}}</h2>
    </div>
    <input type="text" v-model="count">
    <button @click="CHANGE_COUNT(count)" >
      改变
    </button>

    <br>
    <button @click="handleAsync">
      异步操作
    </button>

  </div>
</template>

<script>
import comA from './comA'
import comB from './comB'
import {mapMutations} from 'vuex'
export default {
  //注册状态
  data(){
    return{
      count: 0,
      price: 20
    }
  },
  //声明局部组件
  components: {
    comA,
    comB
  },
  // methods: {
  //   //声明函数
  //   add(){
  //     this.count++
  //   },
  //   reduce(){
  //     this.count--
  //   }
  // }
  methods: {
    // changeCount(){
    //   this.$store.commit('CHANGE_COUNT',this.count)
    // },
    ...mapMutations(['CHANGE_COUNT']),
    //平时的异步处理方式
    handleAsync(){
      // setTimeout(()=>{
      //   this.CHANGE_COUNT(this.count)
      // },2000)
      //actions的异步操作
      this.$store.dispatch('handleAsyncAction',888)
    }
  }

}
</script>

<style>


</style>


