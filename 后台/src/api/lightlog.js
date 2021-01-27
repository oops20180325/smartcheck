import request from '../common/utils/request'


export default {
 dw(data){
  

  return request({
    url: 'api/InfraredLog/Download',
    method: 'get',
    params:{
      site:'91',
      ...data,
    }
  })
 },
 getTableList(data) {
  return request({
    url: 'api/InfraredLog/GetAll',
    method: 'post',
    data:{
      site:'91',
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
    url: 'api/InfraredLog/Update',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 add(data) {
  return request({
    url: 'api/InfraredLog/Add',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
 delet(data) {
  return request({
    url: 'api/InfraredLog/Delete',
    method: 'post',
    data:{
      site:'91',
      ...data
    }
  })
},
}