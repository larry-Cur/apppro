<template>
  <div class="cart-box">
    <van-popup v-model="cartshow" round position="bottom">
      <div class="cart_box" style="min-height:200px">
        <p class="title">新用户下单立减5元</p>
        <p class="clearshop ft14">
          <span>购物车</span>
          <span class="c777" @click="clickdel">
            清空购物
            <van-icon name="close" />
          </span>
        </p>
        <div class="item_box">
          <div class="shop_item" v-for="goods in shopcarlist_x" :key="goods.id">
            <span class="iteml van-ellipsis">{{goods.name}}</span>
            <p>
              <span class="ft18">￥{{goods.price}}</span>
              <van-stepper
                v-model="goods.valNum"
                min="0"
                max="99"
                integer
                theme="round"
                button-size="18px"
                input-width="18px"
                disable-input:true
                @change="changenum"
              />
            </p>
          </div>
        </div>
        <p style="height:80px"></p>
      </div>
    </van-popup>
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
          <p class="cfff ft16 price_p">￥{{ totalprice }}</p>
          <p class="c777 ft12">另外需要配送费6元|支持自取</p>
        </div>
      </div>
      <div class="set_div">
        <p class="ft14">去结算</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart-box",
  data() {
    return {
      cartshow: false,
      num: 0,
    };
  },
  methods: {
    clickcart() {
      console.log(this.shopcarlist_x);
      if (this.shopcarlist_x.length) {
        this.cartshow = true;
      }
    },
    changenum() {
      if (!this.shopcarlist_x.length) {
        this.cartshow = false;
      }
    },
    clickdel(){
        this.$store.commit("clearcart");
        this.cartshow = false;
    }
  },
  computed: {
    shopcarlist_x() {
      console.log(this.$store.getters.shopcarlist);
      return this.$store.getters.shopcarlist;
    },
    totalprice() {
      let total = 0;
      for (let obj of this.shopcarlist_x) {
        total += obj.price * obj.valNum;
      }
      return total.toFixed(2);
    },
  },
};
</script>

<style lang="less" scoped>
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
  max-height: 560px;
  overflow: hidden;
  .item_box {
    max-height: 400px;
    overflow-y: scroll;
  }
  .title {
    text-align: center;
    line-height: 36px;
    height: 40px;
  }
  .clearshop {
    height: 40px;
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