import request from '../common/utils/request'


export default {
 getTableList(data) {
  return request({
    url: 'api/Methane/GetAll',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 edit(data) {
  return request({
    url: 'api/Methane/Update',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 add(data) {
  return request({
    url: 'api/Methane/Add',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 delet(data) {
  return request({
    url: 'api/Methane/Delete',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
}