import axios from 'axios'
import { message } from 'antd'

const defaultAxiosConf = {
  timeout: 5000,
}

const _request = (params = {}, fn = () => {}) => {
  return axios({ ...defaultAxiosConf, ...params }).then(res => {
    const { success, data, err, code } = res.data
    if (code === 401) {
      window.location.href = '/'
      return
    }
    if (success) {
      fn(false)
      return data
    }
    throw err
  }).catch(err => {
    fn(false)
    message.error('网络异常')
  })
}

export default (param) => {
  const type = typeof param
  if (type === 'function') {
    param(true)
    return (obj) => {
      return _request(obj, param)
    }
  }

  if (type && type === 'object') {
    return _request(param)
  }

}

