<template>
    <div>
        <router-link to="" v-for="item in list" :key="item.id">
            {{ item.title}}
            <app-category v-if="item.subcates && item.subcates.length !=0" :list="item.subcates"></app-category>
        </router-link>
    </div>
</template>

<script>
    export default {
        // 为了在当前组件内使用使用, 所以给自己定义一个名称
        name:'app-category',
        // 接收父传递过来的数据
        props:['list']
    }
</script>

<style scoped>

</style>