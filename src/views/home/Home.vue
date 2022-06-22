<template>
  <div id="Home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <feature-view/>
    <tab-control class="tab-control"
                 :title="['流行','新款','精选']"
                 @tabClick="tabClick"/>
    <goods-list :goods="goods[currentType].list"/>
  </div>
</template>

<script>

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import {
  getHomeMultidata,
  getHomeGoods
} from "network/home";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "Home",
  components: {
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
  //data用于存储返回的数据
  data() {
    return {
      banners: [],
      recommends: [],
      /*请求数据，往list数组里放*/
      goods: {
        'pop': {page: 0,list: []},
        'news': {page: 0,list: []},
        'sell': {page: 0,list: []}
      },
      currentType: 'pop'
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
  },
  methods: {
    /*
    * 事件监听相关方法
    * */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    /*
    * 网络请求相关方法
    * */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        //console.log(res);
        this.banners =res.banner.list;
        this.recommends = res.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        //console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
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

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
