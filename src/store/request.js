import axios from 'axios'
// 创建axios实例

console.log(process.env)
const request = axios.create({
  baseURL: '/', // api的base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true, //跨域
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  transformRequest: [
    function (data) {
      let req = JSON.stringify(data)
      return req
    },
  ],
})

// 在请求头中加token
request.interceptors.request.use(
  (config) => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = localStorage.getItem('authorization')
    if (!config.headers.hasOwnProperty('authorization') && token) {
      config.headers.authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    const status = response.status

    if (status === 401) {
      router.push('/401')
      return false
    }
    if (status === 403) {
      router.push('/403')
      return false
    }
    if (status <= 504 && status >= 500) {
      router.push('/500')
      return false
    }
    if (status >= 404 && status < 422) {
      router.push('/404')
      return false
    }

    const res = response.data

    return res
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default request
