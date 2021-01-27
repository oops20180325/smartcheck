import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { _SessionStore } from '@/common/utils/storage'
import globalFn from '@/common/utils/utils'
import {baseapi} from './baseurl'



// create an axios instance
const service = axios.create({
  // baseURL:'http://172.16.10.11:8011/', // 生产
  baseURL:baseapi , // 小辉服务
  timeout: 30000 // request timeout
})
service.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json";
  for (const key in config.data) {
    if (!config.data[key] && config.data[key] !== 0) {
      delete config.data[key]
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {

    console.log(response)

    if(response.headers['content-type']=='application/vnd.ms-excel'){
      response.headers['content-type'] = 'application/octet-stream'
      window.open(response.request.responseURL)
    }

    const res = response.data;
    return res;
    
  },
  error => {
    if(error.response && error.response.status===401){
      let title = '此帐号已在别处登录！！'
      try {
      return MessageBox.confirm(title, '提示', {
          confirmButtonText: '确定',
          showCancelButton:false,
          showClose:false,
          closeOnClickModal:false,
          closeOnPressEscape:false,
          type: 'warning'
        }).then(()=>{
          store.dispatch('user/loginOut').then(() => {
            location.reload() 
          })
        })
      } catch (error) {
        
      }

    }
    const message = error.response ? globalFn.requestError(error.response.status) : '请求错误';
    Message({
      showClose: true,
      message: message,
      type: 'error',
      duration: 3000
    })
    // console.log(123)
    return Promise.reject(error)
  }
)

export default service
