import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层级是商铺id
      1: {
        pid: '',
        lid: '',
        name: '',
        stales: '',
        price: '',
        old: '',
        count: 0
      }
    },
    user: {
      username: ''
    }
  },
  mutations: {
    addShop (state, item) {
      state.cartList = item
      console.log(222, this.state.cartList)
    },
    user(state, username) {
      state.user.username = username
    }
  },
  actions: {
  },
  modules: {
  }
})
