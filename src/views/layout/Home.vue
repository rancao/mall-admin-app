<template>
  <div class="home">
    <left-menu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <slider-nav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/menu.vue';
import SliderNav from './components/sliderNav.vue';

export default {
  components: {
    LeftMenu,
    SliderNav,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>
