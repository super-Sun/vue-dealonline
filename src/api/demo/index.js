import instance from './instance'
import { convertRESTAPI } from '../util'

/** Logs out current logged in user session */
function v2_user_logout_get (opts) {
  return instance({
    method: 'get',
    url: '/v2/user/logout',
    opts: opts
  })
}

/** Get user by user name */
function v2_user_username_get (opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/v2/user/{username}', opts),
    opts: opts
  })
}

/** Updated user */
function v2_user_username_put (opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/v2/user/{username}', opts),
    opts: opts
  })
}

/** Delete user */
function v2_user_username_delete (opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/v2/user/{username}', opts),
    opts: opts
  })
}

/** Returns pet inventories by status */
function v2_store_inventory_get (opts) {
  return instance({
    method: 'get',
    url: '/v2/store/inventory',
    opts: opts
  })
}

/** Place an order for a pet */
function v2_store_order_post (opts) {
  return instance({
    method: 'post',
    url: '/v2/store/order',
    opts: opts
  })
}

/** Find purchase order by ID */
function v2_store_order_orderId_get (opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/v2/store/order/{orderId}', opts),
    opts: opts
  })
}

/** Delete purchase order by ID */
function v2_store_order_orderId_delete (opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/v2/store/order/{orderId}', opts),
    opts: opts
  })
}

/** Create user */
function v2_user_post (opts) {
  return instance({
    method: 'post',
    url: '/v2/user',
    opts: opts
  })
}

/** Creates list of users with given input array */
function v2_user_createWithArray_post (opts) {
  return instance({
    method: 'post',
    url: '/v2/user/createWithArray',
    opts: opts
  })
}

/** Creates list of users with given input array */
function v2_user_createWithList_post (opts) {
  return instance({
    method: 'post',
    url: '/v2/user/createWithList',
    opts: opts
  })
}

/** Logs user into the system */
function v2_user_login_get (opts) {
  return instance({
    method: 'get',
    url: '/v2/user/login',
    opts: opts
  })
}

/** Finds Pets by status */
function v2_pet_findByStatus_get (opts) {
  return instance({
    method: 'get',
    url: '/v2/pet/findByStatus',
    opts: opts
  })
}

/** Finds Pets by tags */
function v2_pet_findByTags_get (opts) {
  return instance({
    method: 'get',
    url: '/v2/pet/findByTags',
    opts: opts
  })
}

/** Find pet by ID */
function v2_pet_petId_get (opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/v2/pet/{petId}', opts),
    opts: opts
  })
}

/** Updates a pet in the store with form data */
function v2_pet_petId_post (opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/v2/pet/{petId}', opts),
    opts: opts
  })
}

/** Deletes a pet */
function v2_pet_petId_delete (opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/v2/pet/{petId}', opts),
    opts: opts
  })
}

/** uploads an image */
function v2_pet_petId_uploadImage_post (opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/v2/pet/{petId}/uploadImage', opts),
    opts: opts
  })
}

/** Add a new pet to the store */
function v2_pet_post (opts) {
  return instance({
    method: 'post',
    url: '/v2/pet',
    opts: opts
  })
}

/** Update an existing pet */
function v2_pet_put (opts) {
  return instance({
    method: 'put',
    url: '/v2/pet',
    opts: opts
  })
}

/** 自定义响应的 mock */
function _get (opts) {
  return instance({
    method: 'get',
    url: '/',
    opts: opts
  })
}

/** 支持 restful 的 mock，替换 id 试试 */
function restful_id_list_get (opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/restful/:id/list', opts),
    opts: opts
  })
}

/** 支持接口代理的 mock，试试在 url 上加 ?s={数字} */
function proxy_get (opts) {
  return instance({
    method: 'get',
    url: '/proxy',
    opts: opts
  })
}

/** 带随机数据的 mock */
function mock_get (opts) {
  return instance({
    method: 'get',
    url: '/mock',
    opts: opts
  })
}

/** 这只是一个响应 post 接口返回随机数据的例子 */
function upload_post (opts) {
  return instance({
    method: 'post',
    url: '/upload',
    opts: opts
  })
}

/** 根据请求参数返回指定数据，试试在 url 上加 ?name={任意值} */
function query_get (opts) {
  return instance({
    method: 'get',
    url: '/query',
    opts: opts
  })
}

export {
  v2_user_logout_get,
  v2_user_username_get,
  v2_user_username_put,
  v2_user_username_delete,
  v2_store_inventory_get,
  v2_store_order_post,
  v2_store_order_orderId_get,
  v2_store_order_orderId_delete,
  v2_user_post,
  v2_user_createWithArray_post,
  v2_user_createWithList_post,
  v2_user_login_get,
  v2_pet_findByStatus_get,
  v2_pet_findByTags_get,
  v2_pet_petId_get,
  v2_pet_petId_post,
  v2_pet_petId_delete,
  v2_pet_petId_uploadImage_post,
  v2_pet_post,
  v2_pet_put,
  _get,
  restful_id_list_get,
  proxy_get,
  mock_get,
  upload_post,
  query_get
}
