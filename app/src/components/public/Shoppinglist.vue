<template>
  <router-link :to=" {path: 'detail',query:{img:data.flexibleData.pictureUrl,brand:data.flexibleData.brand,price:data.flexibleData.pPrice}}" tag="div" class="swiper-slide">
    <div data-v-61fcfe1d class="pro-item">
      <div data-v-61fcfe1d class="pro_con">
        <div data-v-61fcfe1d class="pro-img">
          <img data-v-61fcfe1d class="img" :src="data.flexibleData.pictureUrl" lazy="loaded">
        </div>
        <div data-v-61fcfe1d class="brand-name">{{data.flexibleData.brand}}</div>
        <div data-v-61fcfe1d class="price">
          <span data-v-61fcfe1d class="price-num">
            <i data-v-61fcfe1d class="yen">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">¥</font>
              </font>
            </i>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">{{data.flexibleData.pPrice}}</font>
            </font>
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      
    };
  },
  created() {
      //  console.log(this.params)

  },
  // methods:{
  //    handlerCilck (params){
  //       this.$router.push({
  //       path:`/detail/${params.img}/${params.price}/${params.brand}`,
  //       params
  //     })

      //  console.log(this.data.flexibleData.pictureUrl)
      //  this.$store.state.img=this.data.flexibleData.pictureUrl
      //  this.$store.state.name=this.data.name
      //  this.$store.state.price=this.data.flexibleData.pPrice
     } 
     

  // }x
  // compute:{
  //   datas(){
  //     console.log(data.flexibleData.skuId)
  //    return this.data 
  //   }
  // },

// }
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
