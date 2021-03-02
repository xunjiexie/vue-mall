import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

Vue.use(VueRouter)

const SuNing = () => import('../views/SuNing/SuNing.vue')
const Login = () => import('../views/Login/Login.vue')
const Home = () => import('../views/Home/Home.vue')
const Category = () => import('../views/Category/Category.vue')
const Cart = () => import('../views/Cart/Cart.vue')
const Profile = () => import('../views/Profile/Profile.vue')

const routes = [
  {
    path: '/',
    redirect: '/suning'
  },
  {
    path: '/suning',
    name: 'SuNing',
    component: SuNing,
    redirect: '/suning/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'category',
        name: 'Category',
        component: Category
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 需要登录才能访问的页面
  const needLoginViews = ['Profile']
  if (!store.state.isLogin && needLoginViews.includes(to.name)) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
