<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div>
      <ul>
        <li>
          <router-link :to="{name:'home'}">首页</router-link>
        </li>
        <li>
          <router-link :to="{name:'about',params:{id :'我叫参数'}}" >详情页</router-link>
        </li>
        <! <li>
          <a href="/about/998">详情页</a>
        </li> -->
        <!-- <li>
        <router-link to="/login">登录</router-link>
        </li>
      </ul>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
