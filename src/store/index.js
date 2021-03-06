import Vue from "vue";

export default {
  // 全局状态
  state: {
    // 购物车购买数据, 约定key就是商品ID, values就是商品的购买数据
    shopping: JSON.parse(localStorage.getItem('shopping') || {})
  },
  // 相当于是计算属性 computed
  getters: {
    shoppingSum(state) {
      return Object.values(state.shopping).reduce((sum, v) => sum + v, 0);
    },
    shoppingIds(state){
        return Object.keys(state.shopping)
    }
  },
  // 定义修改全局状态的方法
  mutations: {
    // 这里的方法会自动接收到state状态, 然后第二个参数是用户自己传的, 
    // 我们这里通过赋值结构的es6语法从第二个参数中解出id与count
    modifyShopping(state, {
      id,
      count
    }) {
      // 坑
      Vue.set(state.shopping, id, count);
      localStorage.setItem('shopping', JSON.stringify(state.shopping));
    },
    delShopping(state,id){
      Vue.delete(state.shopping,id);
      localStorage.setItem('shopping', JSON.stringify(state.shopping));
    }
  }
}
