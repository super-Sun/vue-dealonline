<template>
  <div v-show="isDomReady">
    <group>
      <cell-box>
        <div style="width:76px;">处罚决定书编号</div>
        <div style="flex: 1; text-align: center">123456789102222</div>
        <div style="width: 50px; text-align: right" @click="showHideOnBlur = !showHideOnBlur">+</div>
      </cell-box>
    </group>
    <!--预览效果图-->
    <div>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">
        </div>
        <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div class="btn-box">
      <x-button type="primary" link="/demo">去缴款</x-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, CellBox, XButton, XDialog } from 'vux'
  import { getDealDetail } from '@/service/payFine/index'

  export default {
    data () {
      return {
        showHideOnBlur: false,
        show: false,
        isDomReady: false
      }
    },
    created () {
      // 调用业务类
      getDealDetail().then((result) => {
        console.log(result)
      })
    },
    mounted () {
      // 使用vux-loading组件
      this.$vux.loading.show({
        text: '加载中'
        // backgroundColor: '#fff'
      })
      this.viewDidload()
    },
    destroyed () {
      this.$vux.loading.hide()
    },
    methods: {
      viewDidload () {
        // TODO
        setTimeout(() => {
          this.$vux.loading.hide()
          this.isDomReady = true
        }, 2000)
      }
    },
    components: {
      Group,
      Cell,
      CellBox,
      XButton,
      XDialog
    }
  }
</script>

<style lang="less" scoped>
  .btn-box {
    padding: 12px 15px;
  }

  .weui-mask_transparent {
    background-color: #fff;
  }
</style>
