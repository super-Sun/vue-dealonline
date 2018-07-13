<template>
  <div class="cell-card-container" :class="customClass" @click="onClick">
    <div class="cell-card" :class="{'cell-link': isLink}">
      <div class="cell-card-title" v-if="mainTitle">
        <slot name="main-title">{{mainTitle}}</slot>
      </div>
      <div class="cell-card-subtitle" v-if="subTitle">
        <slot name="sub-title">{{subTitle}}</slot>
      </div>
      <div class="cell-card-content" v-if="subTitle">
        <slot name="content">{{content}}</slot>
      </div>
      <div class="cell-card-right-title" v-if="rightTitle">
        <slot name="right-title">{{rightTitle}}</slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import props from './props'
  import { go } from '@/libs/router'

  export default {
    props: props(),
    methods: {
      onClick () {
        !this.userInterface && this.link && go(this.link, this.$router)
      }
    }
  }
</script>

<style lang="less">
  .cell-card-container * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .cell-card-container {
    .cell-card {
      position: relative;
      min-height: 88px;
      background-color: #66bbf7;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      margin: 15px 0;
      padding: 20px 0 20px 18px;
      font-size: 16px;
      color: #fff;
      .cell-card-title {
        font-size:  @weuiCellFontSize;
      }
      .cell-card-subtitle {
        font-size: @weuiCellSubtitleFontSize;
      }
      .cell-card-content {
        font-size: @weuiCellContentFontSize;
      }
      .cell-card-right-title {
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        font-size: @weuiCellRightTitleFontSize;
      }
    }
    .cell-card.cell-link:after {
      content: " ";
      display: inline-block;
      height: 6px;
      width: 6px;
      border-width: 2px 2px 0 0;
      border-color: #fff;
      border-style: solid;
      -webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
      transform: matrix(.71, .71, -.71, .71, 0, 0);
      position: absolute;
      top: 50%;
      right: 15px;
      margin-top: -3px;
    }
  }
</style>
