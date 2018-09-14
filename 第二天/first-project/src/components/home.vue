<template>
  <div>
    <h1>我是首页</h1>
    <!-- //有查询字符串 -->
    <router-link :to="{path:'/login',query:{
      userinfo:'name is shangmu'
    }}">跳转到登录</router-link>
  </div>
</template>

<script>
export default {
  name:"home"
}
</script>

<style>

</style>


