<template>
  <div>
    <p class="msg">{{msg}}</p>
    <img src="../assets/logo.png" alt="logo">
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg:'hello vue'
      }
    }
  }
</script>
<style>
  .msg{
    font-size: 90px;
    color: aqua;
  }
</style>
