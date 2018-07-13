<template>
  <div>
    <!--自定义组件调试-->
    <div style="padding: 0 15px;">
      <cell-card></cell-card>
      <cell-card link="http://www.baidu.com" :mainTitle="'浙A12345'" :subTitle="'车辆状态：正常'" :rightTitle="'去缴费'" customClass="custom" isLink></cell-card>
      <cell-card :subTitle="'浙A12345'" :rightTitle="'去缴费'" :content="'未处理违法(0)条'" customClass="custom" isLink></cell-card>
    </div>
    <!--vux组件调试-->
    <group>
      <cell :title="('按已绑定车辆')" :link="{path:'/next', name: 'jdsbh',  query:{id:1}, params:{id:11}}"></cell>
      <cell :title="('按驾驶证号')" :link="{path:'/next', params:{id:2}}"></cell>
      <cell :title="('按车牌号')" :link="{path:'/next', params:{id:3}}" is-link></cell>
      <cell :title="('按决定书编号')" :link="{path:'/next', params:{id:4}}" is-link></cell>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    GroupTitle,
    Group,
    Cell,
    XInput,
    Selector,
    PopupPicker,
    Datetime,
    XNumber,
    ChinaAddressData,
    XAddress,
    XTextarea,
    XSwitch
  } from 'vux'
  import { getDealDetail } from '@/service/payFine/index'
  import CellCard from '@components/common/cell-card'
  import { ERR_OK } from '@/consts/const'

  export default {
    components: {
      Group,
      GroupTitle,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea,
      XSwitch,
      CellCard
    },
    data () {
      return {
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        value1: '张三',
        value2: '工艺技术',
        value3: '',
        value7: '',
        value8: '',
        value4: '',
        time1: '2017-06-01',
        value5: ['A'],
        value6: [],
        list: [['A', 'B', 'C']],
        numberValue: 0
      }
    },
    methods: {
      cc () {
        console.log(1122)
        this.$router.push({path: '/next', name: 'jdsbh', params: {id: 2}})
      }
    },
    mounted () {
      // 自定义插件
      this.$toast('Hello Vue Plugin', 1500)
      // 获取业务数据
      getDealDetail().then((result) => {
        let data = result.data
        if (data.status === ERR_OK) {
          console.log(result.data)
        }
      })
    }
  }
</script>

<style>

</style>
