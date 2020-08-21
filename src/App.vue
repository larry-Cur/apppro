<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html,body,#app{
  height: 100%;
}
// #app{
//   overflow-y: scroll;
// }
</style>
