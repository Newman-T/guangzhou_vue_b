<template>
    <div class="login">
        <h1 ref="">后台管理</h1>
        <!-- model用来关联表单数据, rules用来指定校验规则 -->
        <el-form label-position="left" label-width="80px" :model="formLabelAlign" ref="ruleForm2" :rules="rules">
            <!-- 如果要表单校验与重置功能, 必须加上prop属性 -->
            <el-form-item label="账号" prop="user_name">
                <el-input v-model="formLabelAlign.user_name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="formLabelAlign.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data(){
                // user:{
                //     user_name:"admin",
                //     password:"123456"
                // }
                function user_nameFn(rule,value,callback) {
                    if(value=""){
                        callback(new Error('账号不能为空'));
                    }else{
                        callback();
                    }
                }
                function passwordFn(rule,value,callback) {
                    if(value=""){
                        callback(new Error('密码不能为空'));
                    }else{
                        callback();
                    }
                }
                
            return {
                formLabelAlign: {
                    user_name: 'ivanyb',
                    password: '123'
                },
                rules:{
                    user_name:[
                        { required: true, message: '请填写账号', trigger: 'blur' },
                        { min: 5, max: 18, message: '账号在5~18位', trigger: 'blur' },
                        { validator: user_nameFn, trigger: 'blur' } 
                    ],
                    password:[
                        { validator: passwordFn, trigger: 'blur' },
                        { pattern: /^\w{3,18}$/, message: '密码在6~18位', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            login(){
                this.$http.post(this.$api.login,this.formLabelAlign).then(res=>{
                    if(res.data.status==0){
                        let nextPage = this.$route.query.nextPage;
                        this.$router.push({ path: nextPage?nextPage:'/' });
                    }else{
                        this.$alert(res.data.message);
                    }
                });
            },
            submitForm(formName){
                this.$refs[formName].validate(result=>{
                    if(result){
                        this.login();
                    }else{
                        this.$alert("账号密码有误！");
                    }
                });
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            }
            // isLogin(){
            //     this.$http.get(this.$api.islogin)
            //         .then(rsp => alert(rsp.data.code));
            // }
        },
    }
</script>

<style scoped leng="less">
    .login{
        width: 400px;
        height: 200px;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #fff;
        border-radius: 8px;
        padding: 20px;
        border: 1px solid #fff;
        border-radius: 6px;
    }
 
    h1 {
        position: absolute;
        top: -60px;
        width: 100%;
        text-align: center;
        font-size: 20px;
        color: #fff;
    }
</style>