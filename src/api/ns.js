import request from '@/utils/request'

// 获取所有 指定ns下的deployments
export function getList() {
  return request({
    url: '/nslist',
    method: 'get'
  })
}
