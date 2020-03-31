<template>
    <div class="content">This is a Home Page!{{msg}}</div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'Hello Home!'
            }
        }
    }
</script>
<style scoped>
    .content{
        font-size: 24px;
        color: green;
    }
</style>
