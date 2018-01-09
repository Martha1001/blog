import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/Views/PageView.vue'
import HomeView from '@/Views/HomeView.vue'
import ArticleView from '@/Views/ArticleView.vue'
import LoadingView from '@/Views/LoadingView.vue'
import RegisterView from '@/Views/RegisterView.vue'
import ByTalkView from '@/Views/ByTalkView.vue'
import ResumeView from '@/Views/ResumeView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PageView,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView,
        },
      ]
    },
    {
      path: '/loading',
      name: 'Loading',
      component: LoadingView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },    
    {
      path: '/bytalk',
      name: 'ByTalk',
      component: ByTalkView
    },
    {
      path: '/article',
      name: 'Article',
      component: ArticleView
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumeView
    },
  ]
})
