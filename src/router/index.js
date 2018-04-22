import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ScrollBar from '../components/ScrollBar.vue'
import TitleBar from '../components/TitleBar.vue'
import HomePage from '../components/HomePage.vue'
import NewsItem from '../components/NewsItem.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/scrollbar',
      name: 'ScrollBar',
      component: ScrollBar
    },
    {
      path: '/titlebar',
      name: 'titlebar',
      component: TitleBar
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/newsitem',
      name: 'newsitem',
      component: NewsItem
    },
  ]
})
