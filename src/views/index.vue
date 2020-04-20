<template>
    <div class="home">
        <div @click="toRoter('/test')">1</div>
    </div>
</template>

<script>
export default {
    name: 'index',
    components: {
    },
    mounted(){
        // this.$get(this.$api.XX).then(res => {})
    },
    methods:{
        toRoter(name){
            this.$router.push(name)
        }
    },
}
</script>

<style lang="less">
    .home{
        div{
            font-size: 24px;
        }
    }
</style>
