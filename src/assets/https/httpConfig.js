const host = process.env.Api; // 主机地址，
export default {
  // 请求url前缀
  baseURL: host,
  // 请求头信息
  headers: {
    "content-Type": "application/json;charset=UTF-8",
  },
  // 请求参数
  body: {},
  // 超时时间
  timeout: 15000,
  // 携带凭证
  // withCredentials: true,

  // 返回数据类型
  responseType: 'json'
}