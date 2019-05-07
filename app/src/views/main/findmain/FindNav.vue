<template>
    <div class="tab-box">
        <div class="wrap-position">
            <div class="tab">
            <router-link class="nav scrollTab" to="/find/new" tag="div" active-class="active"> 
                最新
                <span class="line"></span>
                </router-link> 
                <router-link class="nav scrollTab" to="/find/star" tag="div" active-class="active"> 
                名人优选
                <span class="line"></span>
                </router-link> 
                <router-link  class="nav scrollTab" to="/find/vidio" tag="div" active-class="active"> 
                视频
                <span class="line"></span>
                </router-link> 
                <router-link class="nav scrollTab" to="/find/brand" tag="div" active-class="active"> 
                品牌
                <span class="line"></span>
                </router-link> 
                <router-link class="nav scrollTab" to="/find/style" tag="div" active-class="active"> 
                风格
                <span class="line"></span>
                </router-link> 
            </div>
        </div>
        <div class="tab-content">
      <div class="page n-hot active">
        <div class="list-wrap">
          <router-view></router-view>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import BSscroll from 'better-scroll'
export default {
    data(){
        return{
            title:'qq'
        }
    },

    methods(){
        let bscroll=new BSscroll('.tab',{
            probeType:2,
            scrollX:true,
            scrollY:false
        })
    }
}
</script>

<style lang="stylus" scoped>
.wrap-position
    position relative
    height .5rem
    .tab
        position fixed 
        top .5rem
        left 0
        right 0
        margin 0 auto
        z-index 150
        display flex
        -webkit-box-align center
        align-items center
        -webkit-box-pack justify
        justify-content space-between
        height .5rem
        width 100%
        color #ffffff
        font-size .15rem
        text-align center
        overflow-x scroll !important 
        background-color rgb(71, 71, 71)
        .nav
            position relative
            --webkit-box-flex 1
            width min-content
            flex 1
            height .5rem
            text-align center
            line-height .5rem
            padding 0 .23rem
            white-space nowrap
            text-overflow ellipsis
            .line
                position absolute
                top 50%
                right 0
                content ''
                width .01rem
                height .1rem
                margin-top -.05rem
                background-color rgb(193, 149, 77)
        .active
            color rgb(193, 149, 77)
                

</style>

