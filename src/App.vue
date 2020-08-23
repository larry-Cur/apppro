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
.tcenter{
  text-align: center;
}
.fbold {
  font-weight: bold;
}
.c777 {
  color: #777;
}
.cfff {
  color: #fff;
}
.c000 {
  color: #000;
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
.ft24 {
  font-size: 24px !important;
}
.bgfff {
  background: #fff;
}
.ml10 {
  margin-left: 10px;
}
.mt10 {
  margin-top: 10px;
}
.mt20 {
  margin-top: 20px;
}
.mtb15{
  margin:15px 0;
}
// #app{
//   overflow-y: scroll;
// }
</style>
