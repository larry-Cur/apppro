<template>
  <div class="list_div">
    <div class="shopnav" id="shopnav">
      <div>
        <van-sidebar v-model="activeKey" style="width:100%">
          <van-sidebar-item
            v-for="(item,index) in goodslist_x"
            :key="index"
            :id="'s'+index"
            :title="item.name"
            badge="1"
            style="font-size:13px"
            @click="clicknav(index)"
          />
        </van-sidebar>
        <div style="height:160px"></div>
      </div>
    </div>
    <div class="shopbox">
      <div>
        <div class="item" v-for="(item,index) in goodslist_x" :key="index" :id="index">
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
              <h5 class="ft16 shop_h5">{{data.name}}</h5>
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
              <p class="setp_p" style="margin-top:-10px" @click.stop>
                <van-button
                  icon="plus"
                  type="warning"
                  size="mini"
                  v-show="data.btnShow"
                  @click="changBtn(index,index1)"
                  round
                />
                <van-stepper
                  v-model="data.valNum"
                  v-show="!data.btnShow"
                  min="0"
                  max="99"
                  integer
                  theme="round"
                  button-size="18px"
                  input-width="18px"
                  disable-input:true
                  @change="changeNum(data.id,data.valNum)"
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
    <v-cart></v-cart>
    <!-- 底部组件 -->
  </div>
</template>

<script>
import { goodlist } from "@/api/apis";
import cart from "./ShopCart";
import BScroll from "better-scroll";

export default {
  components: {
    "v-cart": cart,
  },
  data() {
    return {
      activeKey: 0,
      num: 0,
    };
  },
  methods: {
    //侧边导航
    clicknav(index) {
      this.rtScroll.scrollToElement(document.getElementById(index), 400);
      this.activeKey = index;
    },
    changeNum(id, num) {
      // console.log(index, index1,num);
      // if (num < 1) {
      //   this.goodslist_x[index].foods[index1].btnShow = true;
      // }
      this.$store.commit("changenum", {
        // index,
        // index1,
        id,
        num,
      });
    },
    changBtn(index, index1) {
      this.goodslist_x[index].foods[index1].btnShow = false;
      this.goodslist_x[index].foods[index1].valNum = 1;
    },
    clickgoods(data) {
      console.log(data);
    },

    //渲染
    render() {
      goodlist().then((res) => {
        let arr = [...res.data.goodsList];
        for (let k in arr) {
          for (let j in arr[k].foods) {
            arr[k].foods[j].btnShow = true;
            // var indexN='num'+k
            arr[k].foods[j].valNum = 0;
          }
        }
        // this.goodsList = arr;
        this.$store.commit("newgoodslist", arr);
      });
    },
    //
    // showtag(index) {
    //   let num = 0;
    //   let list = this.goodslist_x[index];
    //   console.log(list);
    //   for (let childs of list) {
    //     if (childs.valNum > 0) {
    //       num++;
    //     }
    //   }
    //   return num;
    // },
  },
  created() {
    this.render();
  },
  mounted() {
    // let leftnav = new BScroll(document.getElementById("shopnav"));
    // let rightnav = new BScroll(document.querySelector(".shopbox"));
    // leftnav;
    // rightnav;
    //滚动
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
      //title 高度
      let _y = Math.abs(obj.y) + 50;
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
      for (let i = 0; i < this.goodslist_x.length; i++) {
        let curDivHeight = document.getElementById(i).offsetHeight;
        arr.push({ startY: total, endY: total + curDivHeight, index: i });
        total += curDivHeight;
      }
      return arr;
    },
    goodslist_x() {
      console.log(this.$store.state.goodsList);
      return this.$store.state.goodsList;
    },
  },
};
</script>

<style lang="less" scoped>
.list_div {
  height: 100%;
  display: flex;
  .shopnav {
    width: 80px;
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
.shop_h5 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.shop_title {
  font-weight: 200;
  line-height: 26px;
  font-size: 16px;
  text-indent: 1rem;
  background: #f4f4f4;
  border-left: 3px solid #ddd;
}
.setp_p {
  height: 24px;
}
</style>