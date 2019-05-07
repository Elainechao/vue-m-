<template>
  <div class="cart-main view">
    <div data-v-183deb63 data-v-fe7e6e50 class="placeholder-box">
      <div data-v-183deb63 class="tp-global-head">
        <router-link to="/fistpage" tag="div" data-v-183deb63 class="btn btn-back">
          <img
            data-v-183deb63
            src="//static.360buyimg.com/tp-statics/images/ic_search_leftarrow.png"
            alt
          >
        </router-link>
        <!---->
        <div data-v-183deb63 class="title">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">购物车</font>
          </font>
        </div>
     
        <div data-v-183deb63 class="btn btn-handle2">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">优惠券</font>
          </font>
        </div>
        <div data-v-183deb63 class="btn btn-handle">
          <div data-v-183deb63 class="btn-change">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">编辑</font>
            </font>
          </div>
        </div>
        <!---->
        <!---->
      </div>
    </div>
    <div class="cart-container" v-for="value in $store.state.goodList">
      <div class="cart-wrap">
        <div>
          <div data-v-667e1036 data-v-fe7e6e50 class="cart-main-sku-wrap">
            <div data-v-667e1036 class="cart-main-sku">
              <div data-v-667e1036 class="list">
                <div data-v-667e1036 class="sku-brand-head">
                  <div data-v-667e1036 class="brand">
                    <div data-v-667e1036 class="title">
                      <div data-v-667e1036 class="brand-shop-name-wrap">
                        <div data-v-667e1036 class="name">
                          <img
                            data-v-667e1036
                            src="//img14.360buyimg.com/popshop/s190x80_jfs/t21841/236/2242154783/5942/33be9067/5b4c3420Nac0c59e2.jpg!q75.webp"
                            class="logo" 
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-667e1036 class="brand-block-selectall">
                    <div data-v-667e1036 class="checkbox">
                      <input data-v-667e1036 type="checkbox">
                      <div data-v-667e1036 class="checkbox-text">
                        <font style="vertical-align: inherit;">
                          <font style="vertical-align: inherit;">全选</font>
                        </font>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
                <div data-v-667e1036 class="cart-sku-product">
                  <div data-v-667e1036 skuid="42695180430" class="skuitem">
                    <div data-v-667e1036 class="main">
                      <div data-v-667e1036 class="checkbox">
                        <input data-v-667e1036 type="checkbox">
                      </div>
                      <!---->
                      <div data-v-667e1036 class="sku-pic">
                        <div data-v-667e1036 class="pic sold-out">
                          <img
                            data-v-667e1036
                            :src="value.img"
                            alt
                          >
                          <div data-v-667e1036>
                            <!---->
                          </div>
                          <!---->
                        </div>
                      </div>
                      <div data-v-667e1036 class="sku-info">
                        <div data-v-667e1036 class="info">
                          <div data-v-667e1036 class="sku-name">
                            <div data-v-667e1036 class="name">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">{{value.name}}</font>
                              </font>
                            </div>
                          </div>
                          <div data-v-667e1036 class="params">
                            <div data-v-667e1036 class="attr-key">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">经典黑</font>
                              </font>
                            </div>
                            <div data-v-667e1036 class="attr-key">
                              <!---->
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">XL</font>
                              </font>
                            </div>
                            <!---->
                          </div>
                          <!---->
                          <!---->
                          <div data-v-667e1036 class="price-box">
                            <!---->
                            <div data-v-667e1036 class="price">
                              <span data-v-667e1036 class="yen">
                                <font style="vertical-align: inherit;">
                                  <font style="vertical-align: inherit;">¥</font>
                                </font>
                              </span>
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">{{value.price}}</font>
                              </font>
                            </div>
                          </div>
                          <div data-v-667e1036 class="num">
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">{{$store.state.count}}</font>
                            </font>
                          </div>
                        </div>
                      </div>
                      <!---->
                    </div>
                    <!---->
                    <!---->
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
    <div data-v-09070e18 data-v-fe7e6e50 class="order-amount-wrap fix-ipx-fixed">
      <div data-v-09070e18 class="order-amount">
        <div data-v-09070e18 class="checkbox">
          <input data-v-09070e18 type="checkbox">
          <div data-v-09070e18 class="checkbox-text" @click="handlerClick">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">全选</font>
            </font>
          </div>
        </div>
        <!---->
        <div data-v-09070e18 class="info-wrap">
          <div data-v-09070e18 class="info">
            <div data-v-09070e18 class="total">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">共计：</font>
              </font>
              <div data-v-09070e18 class="price">
                <span data-v-09070e18 class="yen">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">¥</font>
                  </font>
                </span>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">0.00</font>
                </font>
              </div>
            </div>
            <div data-v-09070e18 class="free-shipping">
              <!---->
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">不含运费</font>
              </font>
            </div>
          </div>
          <div data-v-09070e18 class="btn-goOrder">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">去结算</font>
            </font>
            <span data-v-09070e18 class="num">
              <em data-v-09070e18>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">（0）</font>
                </font>
              </em>
            </span>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>
<script>
export default {
    created(){
        console.log(this.$store.state.goodList)
    },
    computed:{
        goodList(){
            return this.$store.state.goodList
        },
        handlerClick(){
	
        }
    }
}
</script>

<style scoped>
.cart-main[data-v-fe7e6e50] {
    width: 100%;
    display: flex;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.view {
    max-width: 3.75rem;
    min-width: 1.80rem;
    margin: 0 auto;
    font-size: .12rem;
}
.tp-global-head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 150;
    width: 100%;
    max-width: 3.75rem;
    margin: 0 auto;
    height: .5rem;
    background-color: #fff;
    color: #212121;
    font-size: .14rem;
    line-height: .5rem;
}
.tp-global-head .btn-back[data-v-183deb63] {
    left: 0;
}
.tp-global-head .title[data-v-183deb63] {
    max-width: 1.75rem;
    height: .50rem;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    font-size: .18rem;
}
.tp-global-head .btn[data-v-183deb63] {
    position: absolute;
    top: 0;
    width: .5rem;
    height: .5rem;
    overflow: hidden;
    font-size: .12rem;
}
.tp-global-head .btn-back img[data-v-183deb63] {
    position: absolute;
    top: 50%;
    left: .14rem;
    width: .12rem;
    height: .24rem;
    margin-top: -0.12rem;
}
.tp-global-head .btn[data-v-183deb63] {
    position: absolute;
    top: 0;
    width: .5rem;
    height: .5rem;
    overflow: hidden;
    font-size: .14rem;
}
.tp-global-head .btn-handle2[data-v-183deb63] {
    right: .6rem;
}
.tp-global-head .btn-handle[data-v-183deb63] {
    right: 0;
}
.cart-container[data-v-fe7e6e50] {
    flex: 1;
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: auto;
    background: #f4f1f1;
    padding-bottom: 0.6rem;
}
.cart-container .cart-wrap[data-v-fe7e6e50] {
    padding-bottom: .94rem;
}
.cart-container .login-tip[data-v-fe7e6e50] {
    width: 100%;
    max-width: 3.75rem;
    height: .45rem;
    position: fixed;
    top: .5rem;
    left: 0;
    right: 0;
    z-index: 60;
    margin: 0 auto;
    line-height: 1.2rem;
    background-color: rgba(35,35,33,.8);
    text-align: center;
    display: none;
}
.cart-main-sku[data-v-667e1036] {
    width: 100%;
    background-color: #f4f1f1;
}
.list[data-v-667e1036] {
    margin: .1rem;
    background-color: #fff;
    padding: 0 .2rem .2rem;
    overflow: hidden;
    /* -webkit-box-shadow: 0.02667rem 0 0.14rem rgba(0,0,0,.06);
    box-shadow: 0.02667rem 0 0.14rem rgba(0,0,0,.06); */
}
.sku-brand-head[data-v-667e1036] {
    position: relative;
    width: 100%;
    background-color: #fff;
}
.sku-brand-head .brand[data-v-667e1036] {
    position: relative;
    height: .5rem;
}
.sku-brand-head .brand .title[data-v-667e1036] {
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    overflow: hidden;
    color: #333;
    font-size: .12rem;
    border-bottom: .005rem solid #ddd;
}
.sku-brand-head .brand .brand-shop-name-wrap {
    display: inline-block;
    height: 100%;
}
.sku-brand-head .brand .title .name {
    line-height: .55rem;
    margin: 0 .2rem;
    text-align: center;
}
.sku-brand-head .brand .title .name .logo{
    height: .25rem;
    margin-top: .15rem;
    margin-bottom: .10rem;
}
.sku-brand-head .brand-block-selectall[data-v-667e1036] {
    position: relative;
    left: 0;
    top: 0;
    height: .3rem;
    line-height: .3rem;
    margin-left: -0.02rem;
    z-index: 7;
}
.sku-brand-head .brand-block-selectall .checkbox[data-v-667e1036] {
    display: inline-block;
   
}
.sku-brand-head .brand-block-selectall .checkbox input[type=checkbox][data-v-667e1036] {
    position: relative;
    left: 0;
    top: 0;
  
    display: inline-block;
    border: none;
    width: .11rem;
    height: .13rem;
    margin-right: .03rem;
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
    background: url('//static.360buyimg.com/tp-statics/2019-2-28/m/img/dingdan_ic_choose_unselect@2x.png') 50% no-repeat;
    background-size: .11rem .11rem;
    vertical-align: middle;
    z-index: 11;
}
.sku-brand-head .brand-block-selectall .checkbox .checkbox-text[data-v-667e1036] {
    
    display: inline-block;
    color: #999;
    width:.24rem;
    height: .32rem;
    line-height: .32rem;
    vertical-align: middle;

}
.cart-sku-product[data-v-667e1036] {
    position: relative;
    width: 100%;
    background-color: #fff;
}
.cart-sku-product .skuitem[data-v-667e1036]:first-of-type {
    margin-top: 0;
}
.cart-sku-product .skuitem[data-v-667e1036] {
    width: 100%;
    position: relative;
}
.cart-sku-product .skuitem .main[data-v-667e1036] {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
}
.sku-pic .pic[data-v-667e1036] {
    position: relative;
    width: 1rem;
    height: 1rem;
    margin-right: .2rem;
}
.sku-pic .pic img[data-v-667e1036] {
    width: 100%;
    height: 100%;
    display: block;
}
.cart-sku-product .skuitem .checkbox[data-v-667e1036] {
    height: 100%;

    margin-right: .03rem;
}
.cart-sku-product .skuitem .checkbox input[type=checkbox][data-v-667e1036] {
    position: relative;
    left: 0;
    top: 0;
    display: inline-block;
    border: none;
    width: .11rem;
    height: 1.0rem;
    margin-right: .03rem;
    appearance: none;
    background: url('//static.360buyimg.com/tp-statics/2019-2-28/m/img/dingdan_ic_choose_unselect@2x.png') 50% no-repeat;
    background-size: .10rem .15rem;
    vertical-align: middle;
    z-index: 11;
}
.cart-sku-product .skuitem[data-v-667e1036]:after {
    content: "";
    display: table;
    clear: both;
}
.order-amount-wrap[data-v-09070e18] {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 150;
    width: 100%;
}
.order-amount[data-v-09070e18] {
    position: relative;
    max-width: 3.75rem;
    height: .5rem;
    margin: 0 auto;
    background-color: #232321;
    color: #fff;
}
.checkbox{
    float: left;
    margin-left: .2rem;
    height: .5rem;
    line-height: .5rem;
    display: inline-block;
}
.checkbox input[type=checkbox][data-v-09070e18] {
    position: relative;
    left: 0;
    top: 0;
    display: inline-block;
    border: none;
    width: .11rem;
    height: .5rem;
    margin-right: .03rem;
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
    background: url('//static.360buyimg.com/tp-statics/2019-2-28/m/img/toolbar_ic_choose_unselect@2x.png') 50% no-repeat;
    background-size: .11rem .15rem;
    vertical-align: middle;
    z-index: 11;
}
.checkbox .checkbox-text[data-v-09070e18] {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
}
.info[data-v-09070e18] {
    float: left;
    margin: .05rem 0 0 .2rem;
}
.info .total[data-v-09070e18] {
    height: .25rem;
    line-height: .25rem;
    overflow: hidden;
}
.info .total .price[data-v-09070e18] {
    display: inline-block;
    font-size: .16rem;
    line-height: .17rem;
}
.info .total .price .yen[data-v-09070e18] {
    font-size: .12rem;
}
.info .free-shipping[data-v-09070e18] {
    font-size: .09rem;
    line-height: .09rem;
}
.btn-goOrder[data-v-09070e18] {
    float: right;
    width: 1.15rem;
    height: .49rem;
    line-height: .49rem;
    background-color: #999;
    font-size: .16rem;
    text-align: center;
    color: #000;
}
.btn-goOrder .num[data-v-09070e18] {
    display: inline-block;
    color: #000;
}
</style>
