import { createRouter, createWebHistory } from 'vue-router'
// import views 
import Home from "../views/HomePage"
import Lessons from "../views/LessonsPage"
import LessonsQuiz1 from "../views/LessonsQuiz1Page"
import LessonsQuiz2 from "../views/LessonsQuiz2Page"
import LessonsQuiz3 from "../views/LessonsQuiz3Page"
import LessonsQuiz4 from "../views/LessonsQuiz4Page"
import LessonsQuiz5 from "../views/LessonsQuiz5Page"
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
import CommunityEvent4 from "../views/CommunityEvent4.vue"

const routes =
  [
      {path: '/', name: 'Landing', component: Landing },
      {path: '/home', name: 'Home', component: Home },
      {path: '/lessons', name: 'Lessons', component: Lessons },
      {path: '/lessonsquiz1', name: 'LessonsQuiz1', component: LessonsQuiz1 },
      {path: '/lessonsquiz2', name: 'LessonsQuiz2', component: LessonsQuiz2 },
      {path: '/lessonsquiz3', name: 'LessonsQuiz3', component: LessonsQuiz3 },
      {path: '/lessonsquiz4', name: 'LessonsQuiz4', component: LessonsQuiz4 },
      {path: '/lessonsquiz5', name: 'LessonsQuiz5', component: LessonsQuiz5 },
      {path: '/login', name: 'Login', component: Login},
      {path: '/register', name: 'Register', component: Register},
      {path: '/progress', name: 'Progress', component: Progress},
      {path: '/conversion', name: 'Conversion', component: Conversion},
      {path: '/articles', name: 'Article', component: Article},
      {path: '/settings', name: 'Settings', component: Settings},
      {path: '/CommunityEvent1', name: 'CommunityEvent1', component: CommunityEvent1},
      {path: '/CommunityEvent2', name: 'CommunityEvent2', component: CommunityEvent2},
      {path: '/CommunityEvent3', name: 'CommunityEvent3', component: CommunityEvent3},
      {path: '/CommunityEvent4', name: 'CommunityEvent4', component: CommunityEvent4}

    
    //   {path: '/lessons', name: 'lessons', component: () => import('../views/Contact')},
    //   {path: '*', name: 'broken', component: () => import('../views/NotFound')}
  ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router