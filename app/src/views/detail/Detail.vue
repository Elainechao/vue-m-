<template>
  <div class="details-wrap">
    <div class="img">
      <img
        :src="$route.query.img"
        alt=""
      >
    </div>
    <div class="item-title">
      <div class="it-text">
        ETRO
      </div>
      <div class="it-text">
        {{$route.query.brand}}
      </div>
      <div  class="it-price">
        <div>
          <div class="i-cur-price">
            <span  class="yen">
                ¥
            </span>
              {{$route.query.price}}
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-car"  @click="handlerClick">加入购物车</div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    created(){
      // console.log(this.$route.query)
        },
        // created()
        methods:{
          ...mapMutations({
          }),
          handlerClick(){

                console.log(11)
            let goods=this.$route.query
            this.$store.commit('incrementBy', goods)
            this.$router.push({path:'/car'})
              
          }
        }
        // mounted(){
        //   let 
        // }
        // computed:mapState({
        //     img:state=>state.img,
        //     name:state=>state.name,
        //     price:state=>state.price
        // })
};
</script>
<style lang="stylus" scoped>
.details-wrap
    width 100%
    height 100%
    background-color #ffffff
    .img
        width 100%
        height 3.75rem
        img 
            width 100%
            height 100%
    .item-title
        width 100%
        padding .18667rem 5% .42667rem
        text-align center
        .it-text
            width 3.375rem
            height .24rem
            font-size .13rem
            line-height .24rem
            font-weight 700
            color #232321
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
        .it-price
            padding: .05rem 0;
            text-align: center
            .i-cur-price
                display  inline
                height .21rem
                line-height .21rem
                font-size .21rem
                color #232321
    .bottom-car 
        position fixed
        bottom 0
        display block
        width 100%
        height 0.45rem
        color #ffffff
        line-height 0.45rem
        font-weight 700
        font-size 0.14rem
        text-align center
        background-color #232321
        z-index 1000
</style>


