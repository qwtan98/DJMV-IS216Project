import { createRouter, createWebHistory } from 'vue-router'
// import views 
import Home from "../views/HomePage"
import Lessons from "../views/LessonsPage"
import Login from "../views/LoginPage"
import Register from "../views/RegisterPage"

const routes =
  [
      {path: '/', name: 'Home', component: Home },
      {path: '/lessons', name: 'Lessons', component: Lessons },
      {path: '/login', name: 'Login', component: Login},
      {path: '/register', name: 'Register', component: Register},
    //   {path: '/lessons', name: 'lessons', component: () => import('../views/Contact')},
    //   {path: '*', name: 'broken', component: () => import('../views/NotFound')}
  ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router