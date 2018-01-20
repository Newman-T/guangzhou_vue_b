// 过滤器
// import Vue from 'vue'
// Vue.filter('json',function(obj){
//     return JSON.stringify(obj);
// })

//导出过滤器函数
export default function(obj){
    return JSON.stringify(obj);
}
