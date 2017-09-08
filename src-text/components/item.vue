<template>
  <li class="list-group-item">
  <div class="handle">
    <a href="javascript:;" @click="removeComment">删除</a>
  </div>
  <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
  <p class="centence">{{comment.content}}</p>
  </li>
</template>
<script>
  export default {
    props:{
      comment:Object,
      deleteComment:Function,
      index:Number
    },
    methods:{
      removeComment(){
        const {index,comment,deleteComment} = this
        if(confirm(`确定删除${comment.name}的评论?`)){
          deleteComment(index)
        }
      }
    }
  }
</script>
<style>
</style>
