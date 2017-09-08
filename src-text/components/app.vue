<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
    <add :addComment="addComment"></add>
    <list :comments="comments" :deleteComment="deleteComment" ></list>
    </div>
  </div>
</template>
<script>
  import add from './add.vue'
  import list from './list.vue'
  export default {
    data (){
      return {
        comments:[
          {name:'tom',content:'react不错'},
          {name:'jack',content:'vue不错'}
        ]
      }
    },
    methods:{
      addComment(comment){
          this.comments.unshift(comment)
      },
      deleteComment(index){
        this.comments.splice(index,1)
      }
    },
     components :{
       add,
       list
     }
  }
</script>
<style>
</style>
