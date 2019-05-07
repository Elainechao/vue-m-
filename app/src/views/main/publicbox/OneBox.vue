<template>
    <div class="pro-box pro-box03">
        <div class="swiper-wrapper-inner">
            <div class="swiper-container">
              <swiper :options="swiperOption">
                <ShoppingList v-for="item in data"  :data="item"></ShoppingList>
              <swiper-slide>
                  <Last></Last>
              </swiper-slide>
                 </swiper>
                </div>
        </div>
    </div>
</template>
<script>
import ShoppingList from '@/components/public/BannerList'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import request from 'utils/request'
import Last from '@/components/public/Last'
require("swiper/dist/css/swiper.css");
export default {
        props: ['data'],  
         data() {
           
    const that = this;
    return {
    //   lists:['https://img11.360buyimg.com/babel/s750x750_jfs/t1/30440/28/5606/180059/5c85c191E2ae3052d/2c4864b1d6e1ce03.jpg!q70.dpg','https://img13.360buyimg.com/babel/s750x750_jfs/t1/25728/6/10194/287914/5c85d51eE8e9cd186/038597ec6b7eb161.jpg!q70.dpg'],
      imgIndex: 1,
      // woman:[],
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        // loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        // autoplay: {
        //   delay: 1500,
        //   stopOnLastSlide: false,
        //   /* 触摸滑动后是否继续轮播 */
        //   disableOnInteraction: false
        // },
        //滑动速度
        speed: 1000,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动~
        grabCursor: true,
        slidesPerView :3.5,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex= this.realIndex - 1;
          }
        },
        }
       };
        },
        components:{
        ShoppingList,
          swiper,
          swiperSlide,
          Last
        },
         mounted(){
        //  console.log(this.data)
         }
     
}
</script>

<style lang="stylus" scoped>
.swiper-container
    position absolute
    bottom 0
    z-index 444
    height 1.85rem
    padding 0 .075rem .1re .075rem
    background-color #ffffff
    width 100%
</style>
<style lang="stylus" scoped>

</style>
  