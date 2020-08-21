<template>
  <div class="shopdesc">
    <div class="shop_header bgfff">
      <div class="score_div">
        <p class="fbold ft18">乡村基</p>
        <p class="score_p">
          <van-rate v-model="shopscore" readonly size="18px" />
          <span class="ml10 c777 ft12">({{}})</span>
          <span class="ml10 c777 ft12">月售{{}}单</span>
        </p>
      </div>
      <div class="store_div">
        <van-icon name="like" :color="store? 'red': '#777'" size="24px" @click="store = !store;" />
        <p>{{store?'已收藏':'收藏'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopscore: 4.5,
      store: false,
    };
  },
  methods: {
    // Clickstore() {
    // },
  },
};
</script>

<style lang="less" scoped>
.shopdesc {
  background: #f5f5f5;
}
.shop_header {
  height: 80px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
</style>