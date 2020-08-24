<template>
  <div class="app_box">
    <!-- 头部组件 -->
    <v-header></v-header>
    <!-- 导航组件 -->
    <div class="nav">
      <van-tabs v-model="active" swipeable>
        <van-tab v-for="(item,index) in tablist" :title="item.name" :key="index" :to="item.hash"></van-tab>
      </van-tabs>
    </div>
    <!-- 内容 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import header from "@/components/header.vue";
export default {
  data() {
    return {
      active: 0,
      tablist: [
        { name: "商品", hash: "/" },
        { name: "评价", hash: "/shopratings" },
        { name: "商家", hash: "/shopdesc" },
      ],
    };
  },
  methods: {
    render() {
      // let lohash=
      // this.active
    },
  },
  created() {},
  components: {
    "v-header": header,
  },
};
</script>

<style lang="less" scoped>
.app_box {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav {
  border-bottom: 1px solid #ddd;
}
.main {
  flex: 1;
  overflow: hidden;
}
</style>