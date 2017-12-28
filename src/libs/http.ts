import axios from 'axios'

import * as jwt from './jwt'

const {REACT_APP_API_HOST, NODE_ENV} = process.env

const instance = axios.create({baseURL: REACT_APP_API_HOST})

instance.interceptors.request.use(
  (config: any) => {
    const token = jwt.get()

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    }

    if (NODE_ENV === 'development') {
      const url = config.url.replace(config.baseURL, '')
      const json = config.data ? JSON.stringify(config.data) : ''
      console.log(`[${config.method}] ${url} ${json}`)
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: any) => {
    const data = response.data
    if (data.success) {
      return Promise.resolve(data)
    }
    if (data.success === false) {
      return Promise.reject(new Error(data.msg))
    }
    return Promise.resolve(response)
  },
  (error) => {
    const response = error.response
    if (response && response.status) {
      const status = response.status
      if (status === 401 || status === 403) {
        window.location.href = '/'
        return Promise.resolve()
      }
    }
    return Promise.reject(error)
  }
)

export default instance
