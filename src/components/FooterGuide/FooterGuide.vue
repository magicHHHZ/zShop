<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
      <span>
        <i class="iconfont icon-u"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/order'}" @click="goto('/order')">
      <span>
        <i class="iconfont icon-icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
      <span>
        <i class="iconfont icon-yonghu"></i>
      </span>
      <span>个人</span>
    </span>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FootGuide',
    methods: {
      goto(path){
        // 编程式路由跳转
        this.$router.replace(path)
      }
    },
  }
</script>

<style scoped lang="stylus" rel="styleSheets/stylus">
  @import '../../common/stylus/mixins';
  .footer-guide
    top-border-1px(#cccccc)
    display flex
    position fixed
    left 0
    bottom 0
    height 50px
    width 100%
    .guide-item
      display flex
      flex-direction: column 
      text-align: center
      width 25%
      &.on
        color: $green
      span
        margin-top: 5px
        font-size: 12px
        i
          font-size: 22px
</style>
