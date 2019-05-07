<template>
    <div class="public-container">
        <Lines :datas="titlesList()"></Lines>
        <Title :datar="titlesList()"></Title>
        <div class="line-position" v-for=" list in all">
        <Shoppinglist  :data="list"></Shoppinglist>
        </div>
    </div>
</template>
<script>
import request from 'utils/request'
import Shoppinglist from '@/components/public/Shoppinglist'
import Lines from '@/components/public/Lines'
import Title from './Title'
export default {
    data(){
        return{
        titles:[],
        woman:[],
        man:[],
        life:[],
        all:[],
        list:[1]
        }
    },
    components:{
        Shoppinglist,
        Title,
        Lines
    },
    methods:{
        titlesList(){
            return this.titles
        }
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
                    let titles =[]
                    let titles1 =[]
                    let titles2 =[]
                    let titles3 =[]
                    let titles4 =[]
                    titles.push( result3.floorList[2],'')
                    titles1.push(result3.floorList[6],result3.floorList[5])
                    titles2.push(result3.floorList[22],result3.floorList[21])
                    titles3.push(result3.floorList[37],result3.floorList[36])
                    titles4.push(result3.floorList[45],result3.floorList[44])
                    this.titles.push(titles4)
                    // console.log(this.titles)
                    this.woman = result.skuInfoList.pro_07945392
                    this.man =result1.skuInfoList.pro_07956220
                    this.life= result2.skuInfoList.pro_07945396
                    // console.log(this.woman)
                    let ss=[]
                    this.all=ss.concat(result3.floorList[46].waresList[0].groupInfoList)
                    // console.log(this.all)
    },
}
</script>
<style lang="stylus" scoped>
.public-container
    // display flex
    width 100%
    // flex-direction column
    // justify-content center
    .line-position
        // margin 0 auto
        width 1.7rem
        height 2.64rem
        padding .13rem 0
        margin .1rem 0 .1rem .12rem
        display inline-block

</style>


