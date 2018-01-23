<template>
    <el-form :inline="true" class="demo-form-inline">
        <el-form-item :label="'请支付' + price + '元'">
            <el-input disabled :value="price"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认支付</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return{
                id:null,
                price:null
            }
        },
        methods: {
            onSubmit(){
                this.$http.get(this.$api.orderPay + this.id).then(res=>{
                    this.$alert('感谢');
                })
            }
        },
        created () {
            console.log(this.$router)
            this.id = this.$route.params.orderid;
            this.price=this.$route.params.price;
        }
    }
</script>

<style scoped>

</style>