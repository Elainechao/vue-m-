<template>
    <div>
        <vue-element-loading :active="true" spinner="bar-fade-scale" size="128" is-full-screen color="#edf" v-if="!alls.floorList">
        </vue-element-loading>
       <BrandList :resource="alls"></BrandList> 
    </div>
</template>
<script>
import request from 'utils/request.js'
import BrandList from '@/components/brand/BrandList'
import BScroll from 'better-scroll'
import{Indicator} from 'mint-ui'
import VueElementLoading from 'vue-element-loading'
export default {
    data(){
        return{
            alls:'',
        }
    },
    components:{
        BrandList,
        VueElementLoading
    },
    async created(){
        // console.log(this.brands.lenght)
        // if(this.brands.lenght===0){
        // console.log(typeof(this.brands))
        //     // console.log(this.brands.lenght)
        //     console.log(1)
        // }
      this.alls=await request({
          url:'/ajax/api?appid=topLife&functionId=qryTopLifeH5BabelFloors&body=%7B%22activityId%22:%22mZoimpUmVZbiuH1krakfmEy5ysb%22,%22closePagination%22:%221%22,%22geo%22:%7B%22lat%22:%220.0%22,%22lng%22:%220.0%22%7D%7D&clientVersion=7.2.0&client=babelnode'
      })
    //   console.log(this.alls)     
    },

}
</script>
<style lang="stylus" scoped>


</style>

