import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{ // 商品列表
        path: '/shoplist',
        name: '/shoplist',
        component: () => import('../views/home/ShopList'),

      },
      { // 商品评价
        path: '/shopratings',
        name: '/shopratings',
        component: () => import('../views/home/ShopRatings'),

      }, { // 店铺详情
        path: '/shopdesc',
        name: '/shopdesc',
        component: () => import('../views/home/ShopDesc'),

      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router