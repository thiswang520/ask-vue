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
      },
    },
    user: {
      username: '',
      email:''
    }

    
  },
  mutations: {
    addShop (state, item) {
      state.cartList = item
      console.log(222, this.state.cartList)
    },
    addUser(state, user) {
      state.user.username = user.username
      state.user.email = user.email
    }
  },
  actions: {
  },
  modules: {
  }
})
