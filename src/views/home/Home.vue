<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  //data用于存储返回的数据
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      //console.log(res);
      this.banners =res.banner.list;
      this.recommends = res.recommend.list;
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
