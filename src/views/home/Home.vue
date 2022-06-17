<template>
  <div id="Home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <feature-view/>

  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
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
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
