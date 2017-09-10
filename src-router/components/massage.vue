<template>
  <div>
      <ul>
        <li v-for="m in messageArr">
          <router-link :to="`/home/massage/massageDateil/${m.id}`">{{m.title}}</router-link>
        </li>
      </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
      data (){
        return {
            messageArr:[ ]
        }
      },
    mounted (){
        setTimeout(()=>{
          this.messageArr=[
            {id:'1',title:'01111'},
            {id:'2',title:'012222'},
            {id:'3',title:'013333'}
          ]
        },2000)
    }
    }

</script>
<style>
</style>
