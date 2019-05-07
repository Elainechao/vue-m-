<template>
    <div class="img-containter">
        <img :src="datat.hotZone.pictureUrl" alt="">
        <div class="item"></div>
    </div>
</template>
<script>
export default {
    props:['datat'],
    created(){
        // console.log(this.datat)
    }
}
</script>

<style lang="stylus" scoped>
.img-containter
    height 100%
    position relative
    width 100%
    overflow hidden
    background #fff
    img 
        left 0
        top 0
        width 100%
        height 100% 
    .item 
        position absolute
        left 0
        top 0
        width 100%
        height 1.68rem
        z-index 5
</style>

