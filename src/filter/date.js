// 过滤器
// import Vue from 'vue'
// Vue.filter('date',function(data){
//     return new Date(data).toLocaleString();
// })

//导出过滤器函数
export default function(date){
    return new Date(date).toLocaleDateString();
}