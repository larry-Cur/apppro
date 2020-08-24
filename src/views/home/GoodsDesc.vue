<template>
  <div class="goodsdesc">
    <div class="gd_img_div">
      <img :src="imgUrl" alt />
    </div>
    <div class="gd_box_div">
      <h3>{{name}}</h3>
      <p class="c777 ft14">
        <span>月售{{sellCount}}份</span>
        <span class="ml10">好评率{{rating}}%</span>
      </p>
      <div class="jocart">
        <p>
          <span class="dg_prcie fbold">￥{{price}}</span>
          <span class="dg_pricea ml10 c777">￥{{price*2}}</span>
        </p>
        <van-button
          round
          type="info"
          icon="plus"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="clickJoin(id)"
        >加入购物车</van-button>
      </div>
      <p class="desc_title">商品介绍</p>
      <p>{{goodsDesc}}</p>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodinfo: {},
      imgUrl: "",
      name: "",
      sellCount: 0,
      rating: 0,
      price: 0,
      goodsDesc: "",
      id: 0,
    };
  },
  methods: {
    clickJoin(id) {
      this.$store.commit("changenum", {
        id,
        num: 1,
      });
      this.$router.push('/')
    },
    render() {
      // console.log(this.$route.query);
      this.imgUrl = this.$route.query.imgUrl;
      this.name = this.$route.query.name;
      this.sellCount = this.$route.query.sellCount;
      this.rating = this.$route.query.rating;
      this.price = this.$route.query.price;
      this.goodsDesc = this.$route.query.goodsDesc;
      this.id = this.$route.query.id;
    },
  },
  created() {
    this.render();
  },
};
</script>

<style lang="less" scoped>
.goodsdesc {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background: #fff;
  z-index: 100000;
  .gd_img_div {
    img {
      width: 100%;
    }
  }
  .gd_box_div {
    padding: 20px;
    h3 {
      line-height: 50px;
    }
    .jocart {
      display: flex;
      align-items: center;
      p {
        flex: 1;
      }
      .dg_prcie {
        color: red;
        font-size: 22px;
      }
      .dg_pricea {
        text-decoration: line-through;
      }
    }
    p {
      line-height: 30px;
    }
    .desc_title {
      line-height: 50px;
      font-size: 20px;
    }
  }
}
</style>