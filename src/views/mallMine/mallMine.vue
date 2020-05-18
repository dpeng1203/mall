<template>
    <div class="mine">
        <div class="top">
            <div class="info">
                <div class="wrap">
                    <img src="" alt="">
                </div>
                <div class="name">
                    18658846672
                </div>
            </div>
            <div class="order">
                <div class="item">
                    <img src="../../assets/images/order_1.png" alt="">
                    <p>全部订单</p>
                </div>
                <div class="item">
                    <img src="../../assets/images/order_2.png" alt="">
                    <p>待发货</p>
                </div>
                <div class="item">
                    <img src="../../assets/images/order_3.png" alt="">
                    <p>待收货</p>
                </div>
                <div class="item">
                    <img src="../../assets/images/order_4.png" alt="">
                    <p>待付款</p>
                </div>
            </div>
        </div>
        <div class="other">
            <div class="item">
                <div class="wrap">
                     <img src="../../assets/images/mine_1.png" alt="">
                </div>
                <span class="name">我的收货地址</span>
                <span>></span>
            </div>
            <div class="item">
                <div class="wrap">
                    <img src="../../assets/images/mine_4.png" alt="" style="width: 0.43rem">
                </div>
                <span class="name">我的足迹</span>
                <span>></span>
            </div>
            <div class="item">
                <div class="wrap">
                    <img src="../../assets/images/mine_2.png" alt="" style="width: 0.44rem">
                </div>
                <span class="name">客服中心</span>
                <span>></span>
            </div>
            <!-- <div class="item">
                <div class="wrap">
                    <img src="../../assets/images/mine_3.png" alt="" style="width: 0.43rem">
                </div>
                <span class="name">意见反馈</span>
                <span>></span>
            </div> -->
            
        </div>   
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.mine{
    background: rgb(242, 242, 242);
    min-height: calc(100vh - 1.6rem);
    .top{
        height: 667*@s;
        background-image: url('../../assets/images/mine_bg.jpg');
        background-size: 100% 100%;
        .info{
            display: flex;
            align-items: center;
            padding: 208*@s 0 0 120*@s;
            .wrap{
                width: 82*@s;
                height: 82*@s;
                border-radius: 50%;
                background: #fff;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .name{
                color: #4D6F73;
                margin-left: 55*@s;
            }
        }
        .order{
            display: flex;
            align-items: center;
            margin-top: 100*@s;
            padding-left: 50*@s;
            .item{
                width: 100*@s;
                margin-left: 50*@s;
                text-align: center;
                img{
                    width: 74*@s;
                }
                p{
                    margin-top: 20*@s;
                    color: #666;
                    font-size: 24*@s;
                }
            }
        }
    }
    .other{
        padding: 68*@s 50*@s 0 30*@s;
        .item{
            display: flex;
            align-items: center;
            height: 92*@s;
            border-bottom: 1px solid #E6E6E6;
            .wrap{
                width: 43*@s;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            img{
                width: 43*@s;
            }
            .name{
                color: #333;
                font-size: 25*@s;
                margin-left: .4rem;
                flex: 1;
            }
        }
    }
}
</style>