<template>
  <div class="header-box" :style="{background: 'url( '+ shop.avatar +') no-repeat'}">
    <div class="mask" @click="showmask">
      <div class="innerbox">
        <div class="img_div">
          <van-image width="100%" height="100%" :src="shop.avatar" />
        </div>
        <div class="desc_div">
          <h3 class="van-ellipsis">
            <van-tag type="danger" mark size="medium">品牌</van-tag>
            <span class="txt">{{shop.name}}</span>
          </h3>
          <p class="van-ellipsis">{{shop.description}} / {{shop.deliveryTime}}分钟达</p>
          <div class="row_div">
            <p class="van-ellipsis desc_p">
              <van-tag color="#f2826a">减</van-tag>
              <span class="txt" v-for="item in shop.supports" :key="item">{{item}}</span>
            </p>
            <p class="icon_van">
              5个
              <van-icon name="arrow" />
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="hot_div">
        <van-notice-bar
          mode="link"
          left-icon="volume-o"
          color="#fff"
          background="rgba(55, 55, 55, 0.5)"
          :text="shop.bulletin"
        />
      </div>
    </div>

    <div v-show="showdesc" class="desc_mask" @click="closemask">
      <h3 class="tcenter">乡村基</h3>
      <p class="tcenter">
        <van-rate v-model="shopscore" readonly size="30px" />
      </p>
      <p class="fbold mtb15">
        <van-divider :style="{ color: '#fff', borderColor: '#fff' }">优惠信息</van-divider>
      </p>
      <p class="m_tag_p">
        <van-tag size="large" color="#f2826a">减</van-tag>
        <span class="ml10 ft18">{{}}1</span>
      </p>
      <p class="fbold mtb15">
        <van-divider :style="{ color: '#fff', borderColor: '#fff' }">商家公告</van-divider>
      </p>
      <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    </div>
  </div>
</template>

<script>
import { shopseller } from "@/api/apis";

export default {
  name: "header-box",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      shop: {},
      showdesc: false,
      shopscore: 4,
    };
  },
  methods: {
    showmask() {
      this.showdesc = true;
    },
    closemask(){
      this.showdesc = false;
    },
    render() {
      shopseller().then((res) => {
        this.shop = res.data.data;
        console.log(this.shop);
      });
    },
  },
  created() {
    this.render();
  },
};
</script>

<style scoped lang="less">
.header-box {
  height: 170px;
  position: relative;
  background-size: 150% !important;
  .mask {
    background-color: rgba(155, 155, 155, 0.3);
  }
  .innerbox {
    padding: 26px;
    display: flex;
    color: #fff;
    .img_div {
      width: 80px;
      height: 80px;
    }
    .desc_div {
      width: 60%;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .txt {
        margin-left: 10px;
      }
      .desc_p {
        width: 80%;
      }
    }
  }
  .row_div {
    display: flex;
    align-items: center;
    .icon_van {
      // width: 30px;
      display: flex;
      align-items: center;
      height: 26px;
      line-height: 26px;
      border-radius: 20%;
      padding: 0 3px;
      font-size: 12px;
      background: rgba(55, 55, 55, 0.7);
      white-space: nowrap;
    }
  }
  .desc_mask {
    position: fixed;
    top: 0;
    z-index: 2000;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    .van-divider {
      font-size: 20px !important;
    }
    h3 {
      font-size: 26px;
      line-height: 80px;
    }
    .m_tag_p{
      line-height: 30px;
    }
   
  }
}
</style>
