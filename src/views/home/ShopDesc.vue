<template>
  <div class="shopdesc">
    <div>
      <div class="bgfff" style="padding:0 10px">
        <!-- 头部 -->
        <div class="shop_header bgfff">
          <div class="score_div">
            <p class="fbold ft18">{{shopedDesc.name}}</p>
            <p class="score_p">
              <van-rate v-model="shopedDesc.score" readonly size="18px" />
              <span class="ml10 c777 ft12">({{shopedDesc.deliveryPrice}})</span>
              <span class="ml10 c777 ft12">月售{{shopedDesc.sellCount}}单</span>
            </p>
          </div>
          <div class="store_div">
            <van-icon
              name="like"
              :color="store? 'red': '#777'"
              size="24px"
              @click="store = !store;"
            />
            <p class="c777">{{store?'已收藏':'收藏'}}</p>
          </div>
        </div>
        <!-- 卡片 -->
        <div class="shop_card">
          <div class="c777">
            <p>起送价</p>
            <p class="ft14">
              <span class="fbold c000">{{shopedDesc.minPrice}}</span>元
            </p>
          </div>
          <div class="c777">
            <p>商家配送</p>
            <p class="ft14">
              <span class="fbold c000">{{shopedDesc.deliveryPrice}}</span>元
            </p>
          </div>
          <div class="c777">
            <p>平均配送时间</p>
            <p class="ft14">
              <span class="fbold c000">{{shopedDesc.deliveryTime}}</span>分钟
            </p>
          </div>
        </div>
      </div>
      <div class="shop_txt mt20 bgfff">
        <div class="notice_div">
          <h5 class>活动与公告</h5>
          <p class="mt20 ft16">{{shopedDesc.bulletin}}</p>
        </div>
        <div class="tag_div mt10">
          <p v-for="tags in shopedDesc.supports" :key="tags">
            <van-tag color="#f2826a" size="medium">减</van-tag>
            <span class="ml10">{{tags}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      shopscore: 4.5,
      store: false,
      shopedDesc:{}
    };
  },
  methods: {
    render() {
      this.shopedDesc = this.shoped;
      console.log(this.shopedDesc);
    },
  },
  computed: {
    shoped() {
      return this.$store.state.shoped;
    },
  },
  created() {
    this.render()
  },
  mounted() {
    // let scorll = new BScroll(document.querySelector(".shopdesc"));
    // scorll;
    new BScroll(".shopdesc", {
      click: true,
      probeType: 3,
    });
    // scorll;
  },
};
</script>

<style lang="less" scoped>
.shopdesc {
  background: #f5f5f5;
  height: 100%;
  overflow: hidden;
}
.shop_header {
  height: 80px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  .score_div {
    flex: 1;
    p {
      line-height: 30px;
      &.score_p {
        display: flex;
        align-items: center;
      }
    }
  }
  .store_div {
    width: 60px;
    text-align: center;
  }
}
.shop_card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  p {
    line-height: 34px;
    text-align: center;
    span {
      font-size: 24px;
      margin-right: 5px;
    }
  }
}
.shop_txt {
  padding: 10px 20px;
  .notice_div {
    padding-bottom: 20px;
    min-height: 140px;
    border-bottom: 1px solid #ddd;
    h5 {
      font-size: 22px;
    }
    p {
      word-wrap: break-word;
      line-height: 24px;
    }
  }
  .tag_div {
    p {
      line-height: 36px;
    }
  }
}
</style>