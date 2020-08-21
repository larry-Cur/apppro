<template>
  <div class="shopratings">
    <div class="ratheader_div bgfff">
      <div class="left_div">
        <p class="score_num">{{shopscore}}</p>
        <p class="score_title">综合评分</p>
        <p class="score_desc">高于周边商家96%</p>
      </div>
      <div class="right_div">
        <p>
          <span>服务质量</span>
          <van-rate v-model="shopscore" readonly size="18px" />
          <span class="ml10">{{shopscore}}</span>
        </p>
        <p>
          <span>菜品质量</span>
          <van-rate v-model="shopscore" readonly size="18px" />
          <span class="ml10">{{shopscore}}</span>
        </p>
        <p>
          <span>送达时间</span>
          <span style="margin-left:8px ;color:#777">{{}}</span>
        </p>
      </div>
    </div>
    <!-- tab -->
    <div class="tab_div mt20">
      <van-tabs type="card">
        <van-tab title="全部"></van-tab>
        <van-tab title="满意"></van-tab>
        <van-tab title="不满意"></van-tab>
      </van-tabs>
    </div>
    <!-- 评价 -->
    <div class="ratings_div bgfff">
      <div class="item_div" v-for="(item,index) in rats" :key="index">
        <div class="img_div">
          <van-image round width="3rem" height="3rem" :src="item.avatar" />
        </div>
        <div class="desc_div">
          <p class="title_p">
            <span class="fbold">{{item.username}}</span>
            <span class="c777 ft14">2016-07-23</span>
          </p>
          <p class="start_p">
            <van-rate v-model="item.score" readonly size="16px" />
            <span class="c777 ft14 ml10">{{item.deliveryTime}}分钟送达</span>
          </p>
          <p class="ft16">{{item.text}}</p>
          <p class="tag_p" v-show="item.recommend==''?false:true">
            <van-icon name="good-job" color="red" size="22px" />
            <span class="ml10">
              <van-tag
                v-for="arr in item.recommend"
                :key="arr"
                plain
                color="#ffe1e1"
                text-color="#ad0000"
                size="medium"
                class="ml10"
              >{{arr}}</van-tag>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shoprats } from "@/api/apis";

export default {
  data() {
    return {
      shopscore: 0,
      rats: [],
    };
  },
  methods: {
    //渲染
    render() {
      shoprats().then((res) => {
        this.rats = res.data.data;
      });
    },
  },
  created() {
    this.render();
  },
};
</script>

<style lang="less" scoped>
.shopratings {
  background: #f5f5f5;
}
.ratheader_div {
  height: 80px;
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
  .left_div {
    text-align: center;
    border-right: 1px solid #ddd;
    padding: 0 12px;
    .score_num {
      font-size: 26px;
      font-weight: bold;
    }
    .score_title {
      line-height: 26px;
    }
    .score_desc {
      color: #777;
      font-size: 12px;
    }
  }
  .right_div {
    margin-left: 10px;
    p {
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
    }
  }
}


.ratings_div {
  padding: 10px;
  .item_div {
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 20px 0;
  }
  .desc_div {
    flex: 1;
    margin-left: 10px;
    p {
      width: 100%;
      line-height: 26px;
      display: flex;
      align-items: center;
      &.title_p {
        justify-content: space-between;
      }
    }
  }
}
</style>