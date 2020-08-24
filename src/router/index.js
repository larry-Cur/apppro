import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopList from '../views/home/ShopList'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [{ // 商品列表
      path: '/',
      name: '/shoplist',
      component: ShopList,
    },
    { // 商品评价
      path: '/shopratings',
      name: '/shopratings',
      component: () => import('../views/home/ShopRatings'),

    }, { // 店铺详情
      path: '/shopdesc',
      name: '/shopdesc',
      component: () => import('../views/home/ShopDesc'),

    },{ // 商品详情
      path: '/goodsdesc',
      name: '/goodsdesc',
      component: () => import('../views/home/GoodsDesc'),

    }
  ]
})
