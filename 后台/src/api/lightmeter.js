import request from '../common/utils/request'


export default {
 getTableList(data) {
  return request({
    url: 'api/Infrared/GetAll',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 edit(data) {
  return request({
    url: 'api/Infrared/Update',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 add(data) {
  return request({
    url: 'api/Infrared/Add',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 delet(data) {
  return request({
    url: 'api/Infrared/Delete',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
}