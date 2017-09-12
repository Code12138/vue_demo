<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
      <span>已完成{{isChecked}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="isChecked" @click="deleteAll">清除已完成任务</button>
  </div>
</template>
<script>
  export default {
    props:{
      todos:Array,
      selectAll:Function,
      deleteAll:Function
    },
    data() {
      return {}
    },
    methods: {},
    computed: {

      isChecked(){
        return this.todos.reduce((sum,todo) =>{
            return sum +(todo.complate ?1:0)
      },0)
      },

      isAllCheck:{
        get(){

          return this.isChecked=== this.todos.length && this.todos.length>0
        },
        set(vaule){
          this.selectAll(vaule)
        }
      }
    }

  }
</script>
<style>
  .  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
