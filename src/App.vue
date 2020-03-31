<template>
    <div class="content">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    .content{
        font-size:14px;
        color: #5bfff7;
    }
</style>
