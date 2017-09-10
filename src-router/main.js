
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from  './components/app.vue'
import about from './components/about.vue'
import home from './components/home.vue'
import massage from './components/massage.vue'
import news from './components/news.vue'
import massageDateil from './components/massagedateil.vue'

// 声明使用插件
Vue.use(VueRouter)

// 创建路由器, 配置路由
const router =  new VueRouter({
  linkActiveClass: 'active', // 指定选中的路由链接的class

  routes: [
    {
      path: '/about',
      component: about
    },
    {
      path: '/home',
      component: home,
      children : [{
        path : 'massage',
        component : massage,
        children :[
          {
            path : 'massageDateil/:id',
            component : massageDateil
          }

          ]
      },
      {
        path : 'news',
        component : news
      }

      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
});

new Vue({
  el: '#app',
  render: h => h(app),
  router // 配置路由器
})
