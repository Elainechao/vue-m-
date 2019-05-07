<template>
    <div class="slider-container">
     <Title :datar="titlesList()"></Title>
        <div class="tabbar-container">
            <ul>
                <li v-for=" item,index of items" :key="index" :class="index === imgIndex ? 'active' : ''" @click="handleClick(index)" v-model="index"><b>{{item}}</b></li>
            </ul>
        </div>
        <div class="banner-warp">
             <swiper :options="swiperOption">
                <swiper-slide class="img-position" v-for="(list,index) in lists" :key="list"><img :src="list" alt="">
                    <OneBox :data="allList(index)"></OneBox>
                </swiper-slide>
                <!-- </swiper-slide>   -->
                 <!-- <swiper-slide class="img-position"><img width="374" src="//m.360buyimg.com/babel/s1125x600_jfs/t1/15512/6/8133/140356/5c734a33E849af0c9/cb887ecfb20f477a.jpg!q70.dpg" alt="">
                <OneBox v-for="mans in man" :key="mans" :data="mans"></OneBox>
                </swiper-slide>
                 <swiper-slide class="img-position"><img width="374" src="//m.360buyimg.com/babel/s1125x600_jfs/t1/9011/25/15626/59180/5c734a47E93001055/38299bd6ca05b3c9.jpg!q70.dpg" alt="">
                <OneBox v-for="lifes in life" :key="lifes" :data="lifes"></OneBox> -->
                <!-- </swiper-slide> -->

            </swiper>
    </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import OneBox from './publicbox/OneBox'
import request from 'utils/request'
require("swiper/dist/css/swiper.css");
import Title from './Title'
export default {
      data() {
    const that = this;
    return{
        woman:[],
        man:[],
        life:[],
        all:[],
        titles:[],
        lists:['//m.360buyimg.com/babel/s1125x600_jfs/t1/16263/37/9211/161103/5c7de868E71e16176/1dbb1c6bc8536ed1.jpg!q70.dpg',
                '//m.360buyimg.com/babel/s1125x600_jfs/t1/15512/6/8133/140356/5c734a33E849af0c9/cb887ecfb20f477a.jpg!q70.dpg',
                '//m.360buyimg.com/babel/s1125x600_jfs/t1/9011/25/15626/59180/5c734a47E93001055/38299bd6ca05b3c9.jpg!q70.dpg'],
        currentIndex: 0,
        items:['女士','男士','生活'],

        imgIndex: 0,
        swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: false,
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
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex = this.realIndex;
          }
         },
         }
         };
        },
        components: {
          swiper,
          swiperSlide,
          OneBox,
         Title,

        },
        async created(){
            const result =await request({
                // url:'/ajax/api?appid=topLife&functionId=qryTopLifeH5BabelFloors&body=%7B%22activityId%22%3A%222reXDuX1YpbxyCNajQyVWvyCWBd5%22%2C%22closePagination%22%3A%221%22%2C%22geo%22%3A%7B%22lat%22%3A%220.0%22%2C%22lng%22%3A%220.0%22%7D%7D&clientVersion=7.2.0&client=babelnode&callback=jsonp9&_=1552994038373'
            url:'/ajax/client.action?uuid=87746ee0-3f49-ed62-3601-bcef9bb67f78&clientVersion=7.2.0&areas=21_1911_26451_26718&client=wh5&screen=375*812&functionId=queryRealatedPros&body=%7B%22relatedIds%22:%22pro_07945392%22,%22pageId%22:%22729003%22,%22moduleId%22:13875534,%22prodSrvPrefix%22:%2200243489_13875534_t2_03095311_6301052988_1_2_0_0_2_5-1-1%22,%22prodExpoSrvPrefix%22:%2200243489_13875534_t2_03095311_6301052988_1_5-1-1%22,%22transParam%22:%22%7B%5C%22bsessionId%5C%22:%5C%2221e761c8-3ce1-47d8-b3d4-a64563cd8688%5C%22,%5C%22babelChannel%5C%22:%5C%22%5C%22,%5C%22actId%5C%22:%5C%2200243489%5C%22,%5C%22enActId%5C%22:%5C%222reXDuX1YpbxyCNajQyVWvyCWBd5%5C%22,%5C%22pageId%5C%22:%5C%22729003%5C%22,%5C%22encryptCouponFlag%5C%22:%5C%221%5C%22,%5C%22requestChannel%5C%22:%5C%22h5%5C%22%7D%22%7D'
            })
            const result1 =await request({
            url:'/ajax/client.action?uuid=87746ee0-3f49-ed62-3601-bcef9bb67f78&clientVersion=7.2.0&areas=21_1911_26451_26718&client=wh5&screen=375*812&functionId=queryRealatedPros&body=%7B%22relatedIds%22:%22pro_07956220%22,%22pageId%22:%22729003%22,%22moduleId%22:13875536,%22prodSrvPrefix%22:%2200243489_13875536_t2_03095328_5901046539_1_2_0_0_2_5-2-1%22,%22prodExpoSrvPrefix%22:%2200243489_13875536_t2_03095328_5901046539_1_5-2-1%22,%22transParam%22:%22%7B%5C%22bsessionId%5C%22:%5C%225d473a89-b429-4f66-bdcd-67dfbc6e60e2%5C%22,%5C%22babelChannel%5C%22:%5C%22%5C%22,%5C%22actId%5C%22:%5C%2200243489%5C%22,%5C%22enActId%5C%22:%5C%222reXDuX1YpbxyCNajQyVWvyCWBd5%5C%22,%5C%22pageId%5C%22:%5C%22729003%5C%22,%5C%22encryptCouponFlag%5C%22:%5C%221%5C%22,%5C%22requestChannel%5C%22:%5C%22h5%5C%22%7D%22%7D'
            })
            const result2 =await request({
            url:'/ajax/client.action?uuid=87746ee0-3f49-ed62-3601-bcef9bb67f78&clientVersion=7.2.0&areas=21_1911_26451_26718&client=wh5&screen=375*812&functionId=queryRealatedPros&body=%7B%22relatedIds%22:%22pro_07945396%22,%22pageId%22:%22729003%22,%22moduleId%22:13875535,%22prodSrvPrefix%22:%2200243489_13875535_t2_03095329_8201049940_1_2_0_0_2_5-3-1%22,%22prodExpoSrvPrefix%22:%2200243489_13875535_t2_03095329_8201049940_1_5-3-1%22,%22transParam%22:%22%7B%5C%22bsessionId%5C%22:%5C%225d473a89-b429-4f66-bdcd-67dfbc6e60e2%5C%22,%5C%22babelChannel%5C%22:%5C%22%5C%22,%5C%22actId%5C%22:%5C%2200243489%5C%22,%5C%22enActId%5C%22:%5C%222reXDuX1YpbxyCNajQyVWvyCWBd5%5C%22,%5C%22pageId%5C%22:%5C%22729003%5C%22,%5C%22encryptCouponFlag%5C%22:%5C%221%5C%22,%5C%22requestChannel%5C%22:%5C%22h5%5C%22%7D%22%7D'
            })
            const result3 =await request({
            // url:'/ajax/api?appid=topLife&functionId=qryTopLifeH5BabelFloors&body=%7B%22activityId%22%3A%222reXDuX1YpbxyCNajQyVWvyCWBd5%22%2C%22closePagination%22%3A%221%22%2C%22geo%22%3A%7B%22lat%22%3A%220.0%22%2C%22lng%22%3A%220.0%22%7D%7D&clientVersion=7.2.0&client=babelnode&callback=jsonp9&_=1552994038373'
                    url:'/data.json'          
            })
            let titles =[]
            titles.push( result3.floorList[2],'')
            this.titles.push(titles)
            // console.log(this.titles)
            this.woman = result.skuInfoList.pro_07945392
            this.man =result1.skuInfoList.pro_07956220
            this.life= result2.skuInfoList.pro_07945396
            this.all.push(this.woman,this.man,this.life)
            // console.log(this.woman)
    },

    methods: {
        handleClick(index) {
            this.imgIndex = index 
            this.swiperOption.initialSlide=this.imgIndex
            //   console.log(this.swiperOption.on)        
        },
        allList(index){
        //    console.log(this.all)
           return this.all[index]
        //    console.log(this.woman[index])
        },
        titlesList(){
            return this.titles
        }
   
    
}
  }
</script>
<style lang="stylus" scoped>
@import '~@/assets/variables.styl'
@import '~@/assets/border.styl'
.slider-container
    width 100%
    height 5.18rem
    .tabbar-container
        height .5rem
        border(1px 0 0 0)
        ul
            height 100%
            display flex
            li
                height 100%
                flex 1
                display flex
                justify-content center
                align-items center
                b
                    font-weight 400
                    font-size .16rem
                    vertical-align inherit
                &.active
                    border-bottom solid 2px  #010101
                &.active b
                    font-weight 700
    .banner-warp
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
</style>
 
                
