import { createRouter, createWebHistory } from 'vue-router'
// import views 
import Home from "../views/HomePage"
import Lessons from "../views/LessonsPage"
import Login from "../views/LoginPage"
import Register from "../views/RegisterPage"
import Progress from "../views/ProgressPage"
import Faq from "../views/FaqPage"
import Article from "../views/ArticlesPage.vue"
import Settings from "../views/SettingsPage"
import Landing from "../views/LandingPage.vue"


const routes =
  [
      {path: '/', name: 'Landing', component: Landing },
      {path: '/home', name: 'Home', component: Home },
      {path: '/lessons', name: 'Lessons', component: Lessons },
      {path: '/login', name: 'Login', component: Login},
      {path: '/register', name: 'Register', component: Register},
      {path: '/progress', name: 'Progress', component: Progress},
      {path: '/faq', name: 'Faq', component: Faq},
      {path: '/articles', name: 'Article', component: Article},
      {path: '/settings', name: 'Settings', component: Settings}
    
    //   {path: '/lessons', name: 'lessons', component: () => import('../views/Contact')},
    //   {path: '*', name: 'broken', component: () => import('../views/NotFound')}
  ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router