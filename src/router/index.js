// 导入第三方包
import Vue from 'vue';
import Router from 'vue-router';

import beforEach from './beforeach.js';


// 导入被路由控制的组件
// 备注: 这里的@符合就是src目录, 如果导入的是js vue json文件, 可以省略后缀名
import Login from '@/components/Login/Login';

Vue.use(Router)

// 创建路由实例，并添加路由守卫
let router = new Router({
    routes:[{name: 'login', path: '/login', component: Login}]
    
});
router.beforEach(beforEach);

export default router