import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoped: {},
    goodsList: [],
  },
  mutations: {
    changeShoped(state, newshoped) {
      state.shoped = newshoped
    },
    //shoplist
    newgoodslist(state, newarr) {
      state.goodsList = newarr
    },
    clearcart(state) {
      for (let ob of state.goodsList) {
        for (let cd of ob.foods) {
          cd.valNum = 0
        }
      }
    },
    //改变商品数量
    changenum(state, params) {
      // state.goodsList[params.index].foods[params.index1]=params.valNum
      for (let obj of state.goodsList) {
        for (let child of obj.foods) {
          if (child.id == params.id) {
            child.valNum = params.num
            return
          }
        }
      }
    }

  },
  // 计算属性
  getters: {
    //购物车数据:  数量>0的商品
    shopcarlist(state) {
      let arr = []
      for (let obj of state.goodsList) {
        for (let child of obj.foods) {
          if (child.valNum > 0) {
            arr.push(child)
          } else {
            child.btnShow = true
          }
        }
      }
      return arr
    }










  }
  // actions: {
  // },
  // modules: {
  // }
})