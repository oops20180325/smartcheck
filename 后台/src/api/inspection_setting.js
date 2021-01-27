import request from '../common/utils/request'


export default {
  getAllInf() {
    return request({
      url: 'api/Device/GetAll',
      method: 'post',
      data:{
        site:'91',
        "Current": 0,
        "PageSize": 200
      }
    })
  },
 getTableList(data) {
  return request({
    url: 'api/PollingSet/GetAll',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 edit(data) {
  return request({
    url: 'api/PollingSet/Update',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 add(data) {
  return request({
    url: 'api/PollingSet/Add',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 delet(data) {
  return request({
    url: 'api/PollingSet/Delete',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
}