<template>
    <div class="list-container">
        <div class="hotZone">
            <img src="https://m.360buyimg.com/babel/jfs/t1/25728/14/6868/46171/5c64cb26Eba7ec910/57dc7ba05e86dbc6.jpg!q70.dpg" alt="">
        <div :class="lists[index]" id="item" v-for="list,index in lists"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           lists:[
               'cl1',
               'cl2',
               'cl3',
               'cl4',
               'cl5',
               'cl6',
               'cl7',
               'cl8'

           ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.hotZone
    position relative
    width 100%
    overflow hidden
    backgound #fff
    height 1.66rem
    img
        position absolute
        left 0
        top 0
        width 100%
        height 100%
#item
    width .78rem
    height .8rem
    position absolute
.cl1
    left 23px
    top 6px
.cl2
    left 104px
    top 6px
.cl3
    left 185px
    top 6px
.cl4
    left 271px
    top 6px
.cl5
    left 23px
    top 86px
.cl6
    left 104px
    top 86px
.cl7
    left 185px
    top 86px
.cl8
    left 271px
    top 86px
</style>

