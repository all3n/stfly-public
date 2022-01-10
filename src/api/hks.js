import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/hks/listx',
    method: 'get',
    params
  })
}
