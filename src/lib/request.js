import axios from 'axios'
import { message } from 'antd'

const defaultAxiosConf = {
  timeout: 5000,
}

export default (params) => {
  return axios({ ...defaultAxiosConf, ...params }).then(res => {
    const { success, data, err, code } = res.data
    if (code === 401) {
      window.location.href = '/'
      return
    }
    if (success) {
      return data
    }
    throw err
  }).catch(err => {
    message.error('网络异常')
  })
}

