<template>
    <div class="content">This is a About Page!{{msg}}</div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'Hello About!'
            }
        }
    }
</script>
<style scoped>
    .content{
        font-size: 24px;
        color: red;
    }
</style>
