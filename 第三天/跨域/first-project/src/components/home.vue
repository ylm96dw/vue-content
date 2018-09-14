<template>
  <div>
    <h1>我是首页</h1>
    <router-link :to="{path: '/login', query:{userinfo: 'name is shanmu'}}">
      跳转到登录
    </router-link>
    <button @click="handleGetData">发送数据</button>
    <button @click="getJsonp">获得Jsonp数据</button>
    <!-- <button @click="getJsonp2">利用插件获取jsonp数据</button> -->
    <button @click="getNoSimple">post非简单请求</button>
    <button @click="handleEnd">使用vue脚手架跨域</button>
  </div>

</template>

<script>
import axios from 'axios'
import jsonp from 'jsonp'
export default {

  methods: {
    handleGetData(){
      axios.get('http://localhost:3000/getMsg').then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log('err',err)
      })
    },
    //jsonp跨域
    getJsonp(){
      let body =document.body
      let script = document.createElement('script') //创建一个script元素标签
      script.src= 'http://localhost:3000/getJsonp?callback=getData'
      body.appendChild(script)
    },
    //jsonp插件不会用
  //  getJsonp2(){
  //     jsonp('http://localhost:3000/getJsonp',{
  //       param:'callback',
  //       name: 'getData'
  //     },function(res){
  //       console.log(res)
  //     })
  //   }
    getNoSimple(){
      axios.post('http://localhost:3000/noSimple').then(res=>{
        console.log(res)
      })
    },
    handleEnd(){
      axios.get('/api/getMsg').then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>


