<template>
  <div>
    <h1>我是登录页面</h1>
    姓名：<input type="text" v-model="username">
    <br>
    密码：<input type="password" v-model="password">
    <button v-on:click="handleSubmit">点击登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      username:'',
      password:''
    }
  },
  created () {
    // /打印出路线
    console.log(this.$route)
    //打印出当前路线的查询字符串
    console.log(this.$route.query)
    console.log(this.$route.params)
  },
  methods: {
      handleSubmit(){
        axios.post('http://localhost:3000/login',{
          username:this.username,
          password:this.password
        }).then(res=>{
          if(res.data.code == 200){
            alert ('登陆成功')
            this.$router.push('/')
          }else{
            alert('登录失败')
          }
        })
      }
    }
}

</script>

<style>

</style>
