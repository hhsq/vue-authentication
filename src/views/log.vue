<template>
    <div style="height: 100%;">
        <Header></Header>
        <div class="login">
            <el-form class="loginForm" :model="logForm" status-icon ref="ruleForm2" label-width="100px">
                <el-form-item label="" prop="pass">
                    <el-input v-model="logForm.userName" auto-complete="off">
                        <template slot="prepend">账号</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="" prop="checkPass">
                    <el-input type="password" v-model="logForm.password" auto-complete="off">
                        <template slot="prepend">密码</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="loginBtn" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "log",
        components: {
            Header: () => import('@/components/common/header.vue')
        },
        data() {
            return{
                logForm: {
                    userName: '',
                    password: '',
                },
            }
        },
        methods: {
            login() {
                this.$router.push('/home');
            }
        }
    }
</script>

<style lang="less" scoped>
    @import (reference) '~@/assets/common.less';
    .login{
        .flex;
        .cc;
        height: calc(100% - 50px);
        .loginForm{
            width: 24%;
        }
        .loginBtn{
            width: 100%;
        }
    }
</style>