<template>
<li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
  <label>
    <input type="checkbox" v-model="todo.complate">
    <span>{{todo.title}}</span>
  </label>
  <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
</li>
</template>
<script>
  import PubSub from 'pubsub-js'
  export default {
    props:{
      todo: Object,

      index: Number
    },
    data() {
      return {
        isShow:false,
        bgColor:'white'
      }
    },
    methods: {
      handleEnter(isenter){
        if(isenter){
          this.isShow=true
          this.bgColor='gray'
        }else{
          this.isShow=false
          this.bgColor='white'
        }
      },
      deleteItem(){
        //|this.deleteTodo(this.index)
        //发布消息
        PubSub.publish('deleteTodo',this.index)
      }
    }

  }
</script>
<style>
</style>
