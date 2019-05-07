<template>
    <div class="title-container">
        <div class="hotZone">    
             <img :src="datar[0][0].hotZone.pictureUrl" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props:["datar"],
    data() {
        return{
            titles:[]
        }
    },
    created(){
        // console.log(this.datar[0][0])

    }
}
</script>


<style lang="stylus" scoped>
.hotZone
    position relative
    width 100%
    overflow hidden
    backgound #fff
    height .72rem
    img
        position absolute
        left 0
        top 0
        width 100%
        height 100%
</style>
