<template>
    <div class="slider-container">       
      <swiper :options="swiperOption">
      <swiper-slide v-for="banner in banners" class="img-position"><img :src="banner.pictureUrl" alt=""></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</template>
<script>
import axios from 'axios'
import request from 'utils/request'
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
      data() {
    const that = this;
    return {
      banners:'',
      imgIndex: 1,
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //滑动速度
        speed: 2000,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动~
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex= this.realIndex - 1;
          },
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
   };
},
        components: {
          swiper,
          swiperSlide
        },
        async created(){
        const result =await request({
            // url:'/ajax/api?appid=topLife&functionId=qryTopLifeH5BabelFloors&body=%7B%22activityId%22%3A%222reXDuX1YpbxyCNajQyVWvyCWBd5%22%2C%22closePagination%22%3A%221%22%2C%22geo%22%3A%7B%22lat%22%3A%220.0%22%2C%22lng%22%3A%220.0%22%7D%7D&clientVersion=7.2.0&client=babelnode&callback=jsonp9&_=1552994038373'
                    url:'/data.json'          
        })
                    this.banners = result.floorList[0].flexibleFloor.flexibleData.adsData_1
                    // console.log(this.banners)
            },
        
  }
</script>
<style lang="stylus" scoped>
.slider-container
  width 100%
  height 100%
  position relative
  z-index 1
  transition-property transform ,-webkit-transform
  height 4rem
  display flex
  box-sizing content-box
  overflow hidden
  .img-position
    position relative
    img
        width 100%
        height 100%
</style>
  