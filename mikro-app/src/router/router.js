import { createRouter, createWebHistory } from 'vue-router'
// import views 
import Home from "../views/HomePage"
import Lessons from "../views/LessonsPage"
import LessonsQuiz from "../views/LessonsQuizPage"
import Login from "../views/LoginPage"
import Register from "../views/RegisterPage"
import Progress from "../views/ProgressPage"
import Conversion from "../views/ConversionPage"
import Article from "../views/ArticlesPage.vue"
import Settings from "../views/SettingsPage"
import Landing from "../views/LandingPage.vue"
import CommunityEvent1 from "../views/CommunityEvent1.vue"
import CommunityEvent2 from "../views/CommunityEvent2"
import CommunityEvent3 from "../views/CommunityEvent3"

const routes =
  [
      {path: '/', name: 'Landing', component: Landing },
      {path: '/home', name: 'Home', component: Home },
      {path: '/lessons', name: 'Lessons', component: Lessons },
      {path: '/lessonsquiz', name: 'LessonsQuiz', component: LessonsQuiz },
      {path: '/login', name: 'Login', component: Login},
      {path: '/register', name: 'Register', component: Register},
      {path: '/progress', name: 'Progress', component: Progress},
      {path: '/conversion', name: 'Conversion', component: Conversion},
      {path: '/articles', name: 'Article', component: Article},
      {path: '/settings', name: 'Settings', component: Settings},
      {path: '/CommunityEvent1', name: 'CommunityEvent1', component: CommunityEvent1},
      {path: '/CommunityEvent2', name: 'CommunityEvent2', component: CommunityEvent2},
      {path: '/CommunityEvent3', name: 'CommunityEvent3', component: CommunityEvent3}

    
    //   {path: '/lessons', name: 'lessons', component: () => import('../views/Contact')},
    //   {path: '*', name: 'broken', component: () => import('../views/NotFound')}
  ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router