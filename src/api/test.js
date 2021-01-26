import request from '@/util/request'
//http://www.axios-js.com/zh-cn/docs/#axios-request-config-1
export function testGetLoad(query) {
  return request({
    url: '/get/list',
    method: 'get',
    params: query
  })
}
export function testGet(pv) {
  return request({
    url: '/tset/get',
    method: 'get',
    params: { pv }
  })
}

export function testPost(data) {
  return request({
    url: '/tset/tpsot',
    method: 'post',
    data
  })
}
