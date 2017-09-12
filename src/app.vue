<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"></todo-header>
      <list :todos="todos"  ></list>
      <todo-fotter :selectAll="selectAll" :deleteAll="deleteAll" :todos="todos" ></todo-fotter>
    </div>

  </div>

</template>
<script>
  import header from './header.vue'
  import list from './list.vue'
  import footer from './footer.vue'
  import PubSub from 'pubsub-js'
  export default {

    data (){
      return {
        todos:[
          {title:'吃饭', complate : false },
          {title:'睡觉', complate : true },
          {title:'打豆豆', complate : false },
          {title:'睡觉觉', complate : false }
          ]
      }
    },
    mounted(){
      this.todo = JSON.parse(localStorage.getItem('todos_key')||'[]')


      //订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)})

    },

    components:{
     'todo-header' : header,
     list,
     'todo-fotter' : footer
   },
    methods:{
      addTodo (todo){
        this.todos.unshift(todo)
      },
      deleteTodo (index){
        this.todos.splice(index,1)
      },
      selectAll (isCheck){
        this.todos.forEach(todo =>{
          todo.complate = isCheck
        })
      },
      deleteAll (){
        this.todos = this.todos.filter(todo => !todo.complate)
      }
    },
    watch:{
      todos:{
        deep:true,
        handler : function (vaule) {
          localStorage.setItem('todos_key',JSON.stringify(vaule))
        }
      }


    }



  }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
