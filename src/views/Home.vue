<template>
  <div class="app_box">
    <!-- 头部组件 -->
    <v-header></v-header>
    <!-- 导航组件 -->
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item,index) in tablist" :title="item.name" :key="index" :to="item.hash"></van-tab>
    </van-tabs>
    <!-- 内容 -->
    <div class="main">
      <router-view />
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
        { name: "商品", hash: "/shoplist" },
        { name: "评价", hash: "/shopratings" },
        { name: "商家", hash: "/shopdesc" },
      ],
    };
  },
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
.main {
  flex: 1;
  overflow-y: scroll;
}

</style>