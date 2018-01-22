// 导入第三方包
import Vue from 'vue';
import Router from 'vue-router';

import beforeEach from './beforeach.js';


// 导入被路由控制的组件
// 备注: 这里的@符合就是src目录, 如果导入的是js vue json文件, 可以省略后缀名
import Login from '@/components/Login/Login'
import Store from '@/components/store/Store'
import GoodsList from '@/components/store/goods/List'
import GoodsDetail from '@/components/store/goods/Detail'
import OrderCommit from '@/components/store/order/Commit'
import OrderPay from '@/components/store/order/Pay'
import Shopcart from '@/components/store/shopcart/Shopcart'

Vue.use(Router)

// 创建路由实例，并添加路由守卫
let router = new Router({
    routes:[
        // 首页就是商品列表页
        {name: 'index', path: '/', component: Store,children:[
            // 商品
            {name: 'goodsList', path: '/goods/list', component: GoodsList},
            {name: 'goodsDetail', path: '/goods/detail/:id', component: GoodsDetail},
            // 购物车
            {name: 'shopcart', path: '/shopcart', component: Shopcart},
            // 订单
            {name: 'orderCommit', path: '/order/commit/:ids', component: OrderCommit},
            {name: 'orderPay', path: '/order/pay', component: OrderPay},
        ]},
        // 登录
        {name: 'login', path: '/login', component: Login},
    ]
    
});
router.beforeEach(beforeEach);

export default router