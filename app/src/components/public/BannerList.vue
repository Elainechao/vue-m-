<template>
  <router-link :to="{name:'detail',query:{img:data.image,brand:data.name,price:data.opPrice}}"  tag="div" class="swiper-slide">
    <div data-v-61fcfe1d class="pro-item">
      <div data-v-61fcfe1d class="pro_con">
        <div data-v-61fcfe1d class="pro-img">
          <img data-v-61fcfe1d class="img" :src="data.image | wh" lazy="loaded">
        </div>
        <div data-v-61fcfe1d class="brand-name">{{data.name}}</div>
        <div data-v-61fcfe1d class="price">
          <span data-v-61fcfe1d class="price-num">
            <i data-v-61fcfe1d class="yen">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">¥</font>
              </font>
            </i>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">{{data.opPrice}}</font>
            </font>
          </span>
        </div>
      </div>
    </div>
  </router-link >
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      
    };
  },
  mounted() {
    // console.log(this.data.skuId);
  },
  compute:{
    datas(){
    //  return this.$route
    }
  },
  methods:{

  }
}
</script>

<style lang="stylus" scoped>
.swiper-slide 
  width 100%
  flex-shrink 0
  height 100%
  position relative
  text-align center
  .pro-item 
    position: relative
    width 100%
    height 100%
    padding 0 0.13333rem
    text-align center
    margin 0 auto
    .pro-img 
      width 100%
      height 100%
      margin 0 auto

      img 
        width 100%
        height 100%;
    .brand-name
      width 100%
      height 0.32rem
      margin-top 0.14rem
      overflow hidden
      -o-text-overflow ellipsis
      text-overflow ellipsis
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      font-size 0.12rem
      text-align center
      white-space normal
    .price 
      width 100%
      height 0.2rem
      line-height 0.2rem
      overflow hidden
      text-align center
      white-space nowrap
      font-size 0
      .price-num
        font-size 0.12rem
</style>
