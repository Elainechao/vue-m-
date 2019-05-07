<template>
  <div class="bottom-contariner">
   <Shoppinglist ></Shoppinglist>
   <MiddleBanner></MiddleBanner> s
  </div>
</template>
<script>
import Shoppinglist from '@/components/public/BannerList'
import request from 'utils/request'
export default {
  components:{
      Shoppinglist
  },
  async created(){
        const result =await request({
            // url:'/ajax/api?appid=topLife&functionId=qryTopLifeH5BabelFloors&body=%7B%22activityId%22%3A%222reXDuX1YpbxyCNajQyVWvyCWBd5%22%2C%22closePagination%22%3A%221%22%2C%22geo%22%3A%7B%22lat%22%3A%220.0%22%2C%22lng%22%3A%220.0%22%7D%7D&clientVersion=7.2.0&client=babelnode&callback=jsonp9&_=1552994038373'
                    url:'/siku/api/recommend/recommend?c_platform_type=0&c_app_ver=6.0.0&c_upk=&from=homepage'          
        })
        console.log(result)
  }
};
</script>
<style lang="stylus" scoped>
// @import '~@/assets/app.css';\
// .product-list
//     width 3.75rem
//     display fixed 
//     justify-content center
//     align-items center
//     .item
//         margin-left .8rem
//         width 1.7rem
//         height 1.64rem
//         padding .13rem 0
//         .pic-box
//             width 1.7rem
//             height 1.7rem
//             img 
//                 width 100%
//                 height 100%
//                 vertical-align middle
//     .item-brand
//         height .16em
//         margin-top .1rem
//         overflow hidden
//         white-space nowrap
//         -o-text-overflow ellipsis
//         text-overflow ellipsis
//     .price-box
//         height .2rem
//         width 1.7rem
//         overflow hidden
//         text-align center
//         white-space nowrap
//         font-size 0
//         span 
//             .12rem     
</style>

