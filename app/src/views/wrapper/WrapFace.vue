<template>
  <div class="splash">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(v,i) in expectedData" :key="v.id">
        <img :src="v.image | wh('large')" alt="">
        <button @click="handleClick" v-if="i === 2">立即体验</button>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import request from 'utils/request.js'

import { mapGetters } from 'vuex'

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
        // loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        // //自动播放
        // autoplay: {
        //   delay: 1000,
        //   stopOnLastSlide: false,
        //   /* 触摸滑动后是否继续轮播 */
        //   disableOnInteraction: false
        // },
        //滑动速度
        // speed: 2000,
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
      }
    // return {
    //   swiperOption: {
    //     pagination: {
    //       el: '.swiper-pagination'
    //     }
    //   },
    //   // expectedData: this.$store.getters.expectMovie.filterMovies
    // }
  },
  components: {
    swiper,
    swiperSlide
  },

  computed: mapGetters('imgWrap', {
    expectedData: 'filterMovies'
  }),
// compute:{
//  goodList(){
//             return this.$store.state.goodList
//         },
// },
  methods: {
    handleClick() {
      this.$router.push({path:'/fistpage'})
    }
  },

  async created() {
    console.log(this.expectedData)
    this.$store.dispatch('imgWrap/load')
    // this.expectedData = result.coming
  }
}
</script>

<style lang="stylus" scoped>
div.splash
  height 100%
  .swiper-container
    height 100%
    .swiper-wrapper
      height 100%
      .swiper-slide
        position relative
        img
          width 100%
          height 100%
        button
          position absolute
          left 50%
          top 80%
          transform translate(-50%, 0)
          width 1.8rem
          height .55rem
          font-size .18rem
          border-radius .1rem
          color #fff
          background rgba(0, 0, 0, 0.8)
</style>

