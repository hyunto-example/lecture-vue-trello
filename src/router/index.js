import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

// Config
Vue.use(VueRouter)

// Component
const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }

// Router
const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login },
  { path: '*', component: NotFound }
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router