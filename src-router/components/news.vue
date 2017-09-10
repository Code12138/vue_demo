<template>
  <div>
      <ul>
        <li v-for="news in newsList">{{news}}</li>
      </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newsList :[
          'news01','news01','news01'
        ]
      }
    }
  }
</script>
<style>
</style>
