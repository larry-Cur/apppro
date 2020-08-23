<template>
  <div class="list_div">
    <div class="shopnav" id="shopnav">
      <div>
        <van-sidebar v-model="activeKey" style="width:100%">
          <van-sidebar-item
            v-for="(item,index) in goodsList"
            :key="index"
            :id="'s'+index"
            :title="item.name"
            badge="5"
            style="font-size:13px"
            @click="clicknav(index)"
          />
        </van-sidebar>
        <div style="height:160px"></div>
      </div>
    </div>
    <div class="shopbox">
      <div>
        <div class="item" v-for="(item,index) in goodsList" :key="index" :id="index">
          <h3 class="shop_title">{{item.name}}</h3>
          <van-card
            v-for="(data,index1) in item.foods"
            :key="index+index1"
            style="background:#fff"
            tag="热销"
            @click="clickgoods(data)"
          >
            <template #thumb>
              <van-image width="86" height="86" :src="data.imgUrl" />
            </template>
            <template #title>
              <h5>{{data.name}}</h5>
            </template>
            <template #tags>
              <van-tag plain type="danger">特惠</van-tag>
            </template>
            <template #desc>
              <p style="color:#888; line-height:28px;">
                <span>月售{{data.sellCount}}</span>
                <span style="margin-left:8px">好评度{{data.rating}}</span>
              </p>
            </template>
            <template #bottom>
              <p style="margin-top:10px">
                <span style="color:red; font-size:16px; font-weight:bold">￥{{data.price}}</span>
                <span
                  style="color:#888; text-decoration: line-through; font-size:10px; margin-left:4px"
                >￥{{data.price*2}}</span>
              </p>
            </template>

            <template #footer>
              <p style="margin-top:-10px">
                <van-button
                  icon="plus"
                  type="warning"
                  size="mini"
                  v-show="data.btnShow"
                  @click="changBtn(index,index1)"
                  round
                />
                <van-stepper
                  v-model="num"
                  v-show="!data.btnShow"
                  min="0"
                  max="99"
                  integer
                  theme="round"
                  button-size="18px"
                  input-width="18px"
                  disable-input:true
                />
              </p>
            </template>
          </van-card>
        </div>
        <div style="height:160px"></div>
      </div>
    </div>
    <!-- 购物车 -->
    <!-- <van-popup v-model="cartshow" round position="bottom" :style="{ height: '20%' }" /> -->
    <van-popup v-model="cartshow" round position="bottom">
      <div class="cart_box" style="min-height:200px">
        <p class="title">新用户下单立减5元</p>
        <p class="clearshop ft14">
          <span>购物车</span>
          <span class="c777">
            清空购物
            <van-icon name="close" />
          </span>
        </p>
        <div class="shop_item">
          <span class="iteml ft18">{{}}11111111</span>
          <p>
            <span class="ft18">￥{{}}123</span>
            <van-stepper
              v-model="num"
              min="0"
              max="99"
              integer
              theme="round"
              button-size="18px"
              input-width="18px"
              disable-input:true
            />
          </p>
        </div>
      </div>
    </van-popup>
    <!-- 底部组件 -->
    <div class="shopcart">
      <div class="cell_div">
        <div class="left_box"></div>
        <div class="right_box cfff tcenter">
          <van-icon name="chat-o" size="20px" />
          <p class="ft12">联系商家</p>
        </div>
      </div>
      <div class="cart_div" @click="clickcart()">
        <div class="img_div tcenter">
          <van-icon name="shopping-cart" size="28px" color="#fff" />
        </div>
        <div class="mide_div">
          <p class="cfff ft16 price_p">￥{{}}</p>
          <p class="c777 ft12">另外需要配送费{{}}元|支持自取</p>
        </div>
      </div>
      <div class="set_div">
        <p class="ft14">去结算</p>
      </div>
    </div>
  </div>
</template>

<script>
import { goodlist } from "@/api/apis";

import BScroll from "better-scroll";

export default {
  data() {
    return {
      activeKey: 0,
      goodsList: [],
      num: 1,
      cartshow: false,
    };
  },
  methods: {
    //侧边导航
    clicknav(index) {
      this.activeKey = index;
      this.rtScroll.scrollToElement(document.getElementById(index), 400);
    },

    changBtn(index, index1) {
      this.goodsList[index].foods[index1].btnShow = false;
    },
    clickgoods(data) {
      console.log(data);
    },
    clickcart() {
      this.cartshow = true;
    },

    //渲染
    render() {
      goodlist().then((res) => {
        let arr = [...res.data.goodsList];
        for (let k in arr) {
          for (let j in arr[k].foods) {
            arr[k].foods[j].btnShow = true;
          }
        }
        this.goodsList = arr;
        console.log(this.goodsList);
      });
    },
  },
  created() {
    this.render();
  },
  mounted() {
    // let leftnav = new BScroll(document.getElementById("shopnav"));
    // let rightnav = new BScroll(document.querySelector(".shopbox"));
    // leftnav;
    // rightnav;

    this.ltScroll = new BScroll("#shopnav", {
      click: true,
      probeType: 3,
    });
    this.rtScroll = new BScroll(document.querySelector(".shopbox"), {
      click: true,
      probeType: 3,
    });

    this.rtScroll.on("scroll", (obj) => {
      // console.log(obj);
      let _y = Math.abs(obj.y);
      let navindex = 0;
      for (let obj of this.getdivarr) {
        if (_y >= obj.startY && _y < obj.endY) {
          navindex = obj.index;
          break;
        }
      }
      this.activeKey = navindex;
      this.ltScroll.scrollToElement(
        document.getElementById("s" + this.activeKey),
        400
      );
    });
  },
  computed: {
    getdivarr() {
      let arr = [];
      let total = 0;
      for (let i = 0; i < this.goodsList.length; i++) {
        let curDivHeight = document.getElementById(i).offsetHeight;
        arr.push({ startY: total, endY: total + curDivHeight, index: i });
        total += curDivHeight;
      }
      return arr;
    },
  },
};
</script>

<style lang="less" scoped>
.list_div {
  height: 100%;
  display: flex;
  .shopnav {
    width: 90px;
  }
  .shopbox {
    flex: 1;
  }
}
.shopnav,
.shopbox {
  height: 100%;
  overflow: hidden;
  padding-bottom: 80px;
}
.shop_title {
  font-weight: 200;
  line-height: 30px;
  font-size: 16px;
  text-indent: 1rem;
  background: #f4f4f4;
  border-left: 3px solid #ddd;
}
.shopcart {
  width: 94%;
  height: 50px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 6px;
  display: flex;
  z-index: 10000;
  .cell_div {
    display: flex;
    .left_box {
      background: #222;
      width: 34px;
      border-radius: 48% 10% 10% 48%;
      margin-right: -20px;
    }
    .right_box {
      padding: 6px 5px 0 0;
      line-height: 16px;
      background: #222;
      width: 48px;
    }
  }
  .cart_div {
    margin-left: 2px;
    flex: 1;
    background: #222;
    display: flex;
    align-items: center;
    padding: 0 5px;
    .img_div {
      width: 40px;
      height: 40px;
      margin-top: -24px;
      line-height: 50px;
      background: chartreuse;
      border-radius: 100%;
    }
    .mide_div {
      line-height: 22px;
      .price_p {
        text-indent: 5px;
      }
    }
  }
  .set_div {
    width: 52px;
    background: red;
    border-radius: 0 100% 100% 0;
    line-height: 50px;
    padding: 0 5px;
  }
}

// 弹出层
.cart_box {
  padding: 0 10px;
  .title {
    text-align: center;
    line-height: 36px;
  }
  .clearshop {
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .shop_item {
    line-height: 40px;
    display: flex;
    align-items: center;
    .iteml {
      flex: 1;
    }
    p {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>