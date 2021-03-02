import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home/Home.vue')
const Category = () => import('../views/Category/Category.vue')
const Cart = () => import('../views/Cart/Cart.vue')
const Profile = () => import('../views/Profile/Profile.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // 需要登录才能访问的页面
//   const needLoginViews = ['Profile']
//   if (needLoginViews.includes(to.name)) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// })

export default router
