<template>
  <div class="list_div">
    <div class="shopnav">
      <van-sidebar v-model="activeKey" style="width:100%">
        <van-sidebar-item
          v-for="(item,index) in goodsList"
          :key="index"
          :title="item.name"
          badge="5"
          style="font-size:13px"
        />
      </van-sidebar>
    </div>
    <div class="shopbox">
      <div class="item" v-for="(item,index) in goodsList" :key="index">
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
    </div>
    <!-- 购物车 -->
    <van-popup v-model="cartshow" position="bottom" :style="{ height: '20%' }" />
    <div class="shopcart">
      <div class="cell_div">
        <p>联系商家</p>
      </div>
      <div class="prciecart_div" @click="clickcart()"></div>
      <div class="set_div">
        <p>结算</p>
      </div>
    </div>
  </div>
</template>

<script>
import { goodlist } from "@/api/apis";

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
  overflow-y: scroll;
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
  width: 90%;
  height: 48px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 10px;
  display: flex;
  .cell_div {
    width: 60px;
    background: #222;
    border-radius: 100% 0 0 100%;
  }
  .prciecart_div {
    margin-left: 5px;
    flex: 1;
    background: #222;
  }
  .set_div {
    width: 60px;
    background: red;
    border-radius: 0 100% 100% 0;
  }
}
</style>