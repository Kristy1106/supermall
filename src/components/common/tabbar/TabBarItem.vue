<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
<!--    <slot v-if="!isActive" name="item-icon"></slot>-->
<!--    <slot v-else name="item-icon-active"></slot>-->
<!--    <div :class="{active: isActive}" >-->

    <!--基本语法14页：动态绑定-->
    <div :style="activeStyle" >
      <slot name="item-text"></slot>
    </div>

    <!--display不同的图片和文字-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/home.jpg">-->
<!--      <div>首页</div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      //isActive: false,
      //path: '/home'
    }
  },
  computed: {
    isActive() {
      //判断当前活跃的路由的path包不包含this.path
      // /home -> item1(/home) =true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)

    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;  /*开发高度一般是49*/
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /*.active {*/
  /*  color: red;*/
  /*}*/
</style>
