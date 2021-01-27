import request from '../common/utils/request'


export default {
 getTableList(data) {
  return request({
    url: 'api/PresetPoints/GetAll',
    method: 'post',
    data:{
      site:'91',
      DeviceType:1,
      ...data
    }
  })
},
 getAllInf() {
  return request({
    url: 'api/Infrared/GetAll',
    method: 'post',
    data:{
      site:'91',
      "Current": 0,
      "PageSize": 200
    }
  })
},
 edit(data) {
  return request({
    url: 'api/PresetPoints/Update',
    method: 'post',
    data:{
      site:'91',
      DeviceType:1,
      ...data
    }
  })
},
 add(data) {
  return request({
    url: 'api/PresetPoints/Add',
    method: 'post',
    data:{
      site:'91',
      DeviceType:1,
      ...data
    }
  })
},
 delet(data) {
  return request({
    url: 'api/PresetPoints/Delete',
    method: 'post',
    data:{
      site:'91',
      DeviceType:1,
      ...data
    }
  })
},
}