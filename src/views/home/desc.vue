<template>
    <div class="desc">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in swipeImg" :key="item.pOrder"><img :src="item.pPicUrl" alt=""></van-swipe-item>
        </van-swipe>
        <div class="img-wrap">
            <img :src="item.pPicUrl" alt="" v-for="item in descImg" :key="item.pOrder">
        </div>
    </div>
</template>

<script>
import {homeDesc} from '../../api/api_home.js'
import { Swipe, SwipeItem, Icon } from 'vant';
export default {
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Icon.name]: Icon
    },
    data(){
        return{
            swipeImg: [],
            descImg: []
        }
    },
    methods: {
        getDesc(pCode) {
            homeDesc({pCode}).then(res => {
                if(res.resultCode === 1) {
                    console.log(res.data)
                    this.swipeImg = res.data.filter(ele => {
                        return ele.pType === 1
                    })
                    this.descImg = res.data.filter(ele => {
                        return ele.pType === 0
                    })
                    console.log(this.swipeImg)
                    console.log(this.descImg)
                }
            })
        }
    },
    mounted() {
        this.getDesc(this.$route.query.pCode)
    }
}
</script>

<style>

</style>