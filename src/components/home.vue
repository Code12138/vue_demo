<template>
  <div>
    <h2>home组件 {{msg}}</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link to="/home/news">News</router-link>
          </li>
          <li>
            <router-link to="/home/massage">Message</router-link>
          </li>
        </ul>

        <router-view></router-view>
      </div>
  </div>
</template>
<script>
  export default {
    props:['msg']
  }
</script>
<style>
</style>
