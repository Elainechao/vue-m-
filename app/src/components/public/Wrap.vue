<template>
    <div>
        <template>
            <Lines :datas="titlesList()"></Lines>
            <Title :datar="titlesList()"></Title>
        </template>
        <template v-for="list,index in titles1">
            <Img :datat="list"></Img>
            <div  class="wrap-containter">
                    <div class="product-list">
                    <template  v-for="item in titles2">
                        <div class="img-position">
                            <Shoppinglist :data="item"></Shoppinglist>
                        </div>
                    </template>
                    </div>
                    <div  class="product-list">
                    <template v-for="item1 in titles3">
                        <div class="img-position">
                            <Shoppinglist :data="item1"></Shoppinglist>
                        </div>
                    </template>
                <template>
                    <div class="img-position"><Last></Last></div>
                </template>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import request from 'utils/request'
import Lines from './Lines'
import Title from '@/views/main/Title'
import Img  from './Pic'
import Shoppinglist from './BannerList'
import Last from './Last'
export default {
    data(){
        return{
            titles:[],
            titles1:[],
            titles2:[],
            titles3:[],
            titles4:[],
            titles5:[],
            titles6:[],
        }
    },
    methods:{
        titlesList(){
            return this.titles
        },
    },
    components:{
        Shoppinglist,
        Last,
        Lines,
        Title,
        Img
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
                result.floorList
                let titles1 =[]
                let titles2 =[]
                titles1.push(result3.floorList[6],result3.floorList[5])
                this.titles.push(titles1)
                this.titles1=titles2.concat(result3.floorList[7],result3.floorList[11],result3.floorList[15])
                // console.log(this.titles1)
                // console.log(this.titles1)
                // console.log(this.titles)
                this.woman = result.skuInfoList.pro_07945392
                this.man =result1.skuInfoList.pro_07956220
                this.life= result2.skuInfoList.pro_07945396
                // console.log(this.woman)
                let ss=[]
                this.all=ss.concat(result.skuInfoList.pro_07945392,result1.skuInfoList.pro_07956220,result2.skuInfoList.pro_07945396)
                // console.log(this.all)
                this.titles2.push(this.all[3],this.all[1],this.all[2])
                this.titles3.push(this.all[4],this.all[5])

                // console.log(this.all)
    }

    
}
</script>

<style lang="stylus" scoped>
.product-list
    width 100%
    padding 0 .15rem
    height 2.16rem
    display flex
    flex-direction row
    justify-content center
    align-items center
    .img-position
        margin-left 0
        width 1.1rem
        height 1.96rem
        background-color #fff
        display inline-block
        margin .1rem 0
        vertical-align top
        font-size .12rem
        white-space normal
</style>
