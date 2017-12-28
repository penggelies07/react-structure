import http from '../libs/http'

// 获取用户信息
export function fetch () {
  return http.get(`/user`)
}