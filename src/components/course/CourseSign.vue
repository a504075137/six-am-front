<template>
  <div class="sign">
       <div class="content">
           <div class="user">
               <div class="img"></div>
               <div>
                    <div class="name">用户名</div>
                    <div class="data">Sunday, October 20th, 2019</div>                   
               </div>
           </div>
           <div class="detail">
               <p>“ The proper function of man is to live, but not to exist.”</p>
                <p class="right">——Jack London</p>
           </div>
           <div class="time">
               <div class="day">
                   <div class="date">100<span class="unit">天</span></div>
                   <div class="des">累计打卡</div>
               </div>
               <div class="day">
                   <div class="date">40<span class="unit">分钟</span></div>
                   <div class="des">今日时长</div>
               </div>
           </div>
           <div class="bottom">
               <div class="left">
                   <div class="iconImg"></div>
                   <div class="scanbutton"></div>
               </div>
               <div class="right"></div>
           </div>
       </div>
  </div>
</template>

<script>
export default {
    name: 'sign'
}
</script>

<style lang="less" scoped>
.sign {
    height: 100vh;
    overflow: hidden;
    background-color: #989898;
    font-size: 0.36rem;
    .content {
        .wh(5.7rem, 10.5rem);
        background-color: #fff;
        margin: 0.5rem auto 0;
        padding: 0.34rem 0.3rem;
        .user {
            .wh(100%, 1.5rem);
            .flex(flex-start);
            border-bottom: dotted 0.03rem rgba(0,0,0,0.2);
            .img {
                .wh(1.14rem);
                margin-right: 0.16rem;
                background-color: #ffffff;
                border: solid 0.03rem #f39800;
                border-radius: 100%;
            }
            .name {
                font-size: 0.48rem;
                color: #000000;
            }
            .data {
                margin-top: 0.19rem;
                font-size: 0.2rem;
                color: #989898;
            }
        }
        .detail {
            margin-top: 3.5rem;
            .right {
                text-align: right;
                margin-bottom: 0.28rem;
            }
        }
        .time {
            .flex();
            background-color: #1f7beb;
            box-shadow: 0px 0.02rem 0.1rem 0px rgba(0, 0, 0, 0.2);
            border-radius: 0.2rem;
            opacity: 0.7;
            padding: 0.1rem 0;
            .day {
                .wh(2.84rem, 1.6rem);
                .flex-column();
                color: #fff;
                + .day {
                    border-left: 0.04rem solid #f8f8f8;
                }
                .date {
                    font-size: 0.5rem;
                    .unit {
                        font-size: 0.24rem;
                    }
                }
                .des {
                    font-size: 0.28rem;
                }
            }
        }
        .bottom {
            .flex(space-between);
            margin-top: 0.32rem;
            .iconImg {
                .wh(2.4rem, 0.82rem);
                margin-bottom: 0.12rem;
                border: 1px solid #000;
            }
            .scanbutton {
                .wh(2.42rem, 0.56rem);
                border: 1px solid #000;
            }
            .right {
                .wh(1.5rem);
                border: 1px solid #000;
            }
        }
    }
}
</style>