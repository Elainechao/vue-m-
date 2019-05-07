<template>
    <div>
    <template v-if="data.template === 'custom_material'">
        <div class="slider-container">       
            <swiper :options="swiperOption">
                <swiper-slide class="img-position" v-for="value in data.flexibleFloor.flexibleData.adsData_1" ><img height="100%" :src="value.pictureUrl" alt=""></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </template>

    <template v-else-if="data.template === 'hotzone'">
        <div class="img-position1" :height="data.height/3" width="100%"> 
            <img :src="data.hotZone.pictureUrl" alt="" :height="data.height/3" width="100%" >
        </div>
    </template>

    <template v-else-if="data.template === 'guanggao_tonglan'">
        <div class="guanggao_tonglan" :height="data.hight"> 
            <div class="vidio-box">
                <div class="full-sreen-poster"></div>
                <div class="play-btn">
                    <span class="play-time">
                    </span>
                    <video data-v-7770085e="" controls="controls" preload="metadata" 
                    x5-video-player-type="h5" x5-video-orientation="portraint" 
                    x5-video-player-fullscreen="true" 
                    :src="data.video.videoUrl" width="100%" :height="data.height" :poster="data.video.pictureUrl || ''" class="video-cont">
                    </video>
                </div>
            </div>
        </div>
    </template>
        <template v-else-if="data.template ==='jiange'">
            <div class="jiange">
            <div :style="data.background" width="100%" :height="data.height/2"></div>
            </div>
        </template>      
    </div>
    <!-- <img :src="" alt=""> -->
</template>
<script>
import axios from 'axios'
import request from 'utils/request'
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
    props:['data'],
    created(){
       if(this.data.template === 'custom_material'){
        console.log(this.data.flexibleFloor.flexibleData.adsData_1)
       }
    },
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
        // autoplay: {
        //   delay: 1500,
        //   stopOnLastSlide: false,
        //   /* 触摸滑动后是否继续轮播 */
        //   disableOnInteraction: false
        // },
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
  }
</script>
<style lang="stylus" scoped>
.slider-container
    width 100%
    position relative
    z-index 1
    transition-property transform ,-webkit-transform
    height 4rem
    display flex
    box-sizing content-box
    overflow hidden
        .img-position
            position relative
            height 100%
.img-position1
    position relative
    width 100%
    overflow hidden
    background-color #fff

    // img 
    //     display block
    //     margin 0 auto
        // width 100%
        // height 100%
    .word
    position relative
    width 100%
    overflow hidden
    background-color #fff
    margin 0 auto
    // img 
    //     display block
    //     margin 0 auto
        // width 100%
        // height 100%
// .guanggao_tonglan 
//     width 100%
//     // height 2.5rem
//     .vidio-box
//         position relative
//         height 100%
//         .full-screen-poster
//             height 100%
//             width 100%
//             vertical-align middle
//             background-repeat no-repeat
//             background-position 50%
//             background-color #000
//             background-size contain
//         .play-btn
//             position absolute
//             top 50%
//             left 50%
//             width 50%
//             height 50%
//             margin-left -0.25rem;
//             margin-top -0.25rem
//             border-radius .05rem
//             background-color rgba(0,0,0,.8)
//             :before
//                 content ""
//                 position absolute
//                 top 50%
//                 left 50%
//                 width 20px
//                 height 20px
//                 background-image url(//m.360buyimg.com/babel/jfs/t29902/312/106521253/285/c88c9979/5be7d819Nc0eec2b8.png);
//                 -webkit-background-size 100% 100%
//                 background-size 100%
//                 margin-top -0.17rem 
//                 margin-left -0.1rem
//             .play-time
//                 position absolute
//                 top 50%
//                 left 50%
//                 width 100%
//                 text-align center
//                 font-size .12rem
//                 color #fff
//                 margin-left -0.25rem
//                 margin-top .05rem
//                 overflow hidden
                .video-cont
                    width 100%
                    height 100%
                    background-color #000
                    vertical-align middleZ
//             video 
//                 height 275px
//                 width 3.75rem
//                 position absolute
//                 top 0
//                 left 0
//                 z-index -5
//                 opacity 0
//                 visibility visible
//                 -webkit-transition all .5s ease
//                 -o-transition all .5s ease
//                 transition all .5s ease
.jiange
    width 3.75rem
    height .05rem
</style>
  