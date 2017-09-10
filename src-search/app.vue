<template>
  <div>
    <input type="text" v-model.lazy="searchName">
    <div v-if="!repoName">正在加载</div>
    <div v-else>
      most start repo is
      <a :href="url">{{repoName}}</a>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        searchName: '',
        url: '',
        repoName: ''
      }
    },
     mounted(){
      const url = `https://api.github.com/search/repositories?q=${this.searchName}&sort=stars`
     this.$http.get(url)
       .then(
         response =>{
           const result = response.body
            const repo = result.items[0]
           this.repoName = repo.name
           this.url = repo.html_url
         },
         response =>{
           alert('请求失败')
         }
       )
    }
  }
</script>
<style>
</style>
