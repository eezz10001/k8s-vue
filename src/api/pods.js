import request from '@/utils/request'

// 获取所有 指定ns下的deployments
export function getPodsByNs(ns) {
  return request({
    url: '/pods?ns=' + ns,
    method: 'get'
  })
}
