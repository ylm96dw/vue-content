<template>
  <div class="comB">
    <button @click="reduce">-</button>
    <strong>
      <!-- {{this.$store.state.count}} -->
      {{count}}
      </strong>
    <button @click="add">+</button>
    <button @click="handleClick">兄弟组件传值</button>
  </div>
</template>

<script>
//引入BUS
import bus from '../bus'
//引入mapState
import {mapState} from 'vuex'
export default {
  data(){
    return  {
      msg: '来自兄弟组件B的内容'
    }
  },
  // props:{
  //   count:{
  //     type:Number
  //   }
  // },
  methods: {
    reduce(){
      this.$store.commit('REDUCE_COUNT')
    },
    //触发自定义函数
    add(){
      this.$store.commit('ADD_COUNT')
    },

    handleClick(){
      this.$bus.$emit('toData',this.msg)
    }
  },
  computed: {
    ...mapState(['count'])
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
