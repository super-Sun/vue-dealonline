import { demo } from '@/api/index'

/**
 * 获取订单详情
 * @param ops
 * @returns {*}
 */
function getDealDetail (ops) {
  // 同时获取多个接口信息
  return Promise.all([demo.v2_pet_findByStatus_get(), demo.v2_pet_findByStatus_get()]).then((results) => {
    console.log('result1:' + results[0])
    console.log('result2:' + results[1])
    return {
      data: results[0]
    }
  })
}

export {
  getDealDetail
}
