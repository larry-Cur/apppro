<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  components: {
    Home
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html,
body,
#app {
  height: 100%;
}

.fbold {
  font-weight: bold;
}
.c777 {
  color: #777;
}
.ft12 {
  font-size: 12px;
}
.ft14 {
  font-size: 14px;
}
.ft16 {
  font-size: 16px;
}
.ft18 {
  font-size: 18px;
}
.bgfff {
  background: #fff;
}
.ml10 {
  margin-left: 10px;
}
.mt20 {
  margin-top: 20px;
}
// #app{
//   overflow-y: scroll;
// }
</style>
