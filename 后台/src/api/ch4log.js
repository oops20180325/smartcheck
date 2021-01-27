import request from '../common/utils/request'


export default {
  dw(data){
    return request({
      url: 'api/MethaneLog/Download',
      method: 'get',
      params:{
        site:'91',
        ...data,
      }
    })
   },
 getTableList(data) {
  return request({
    url: 'api/MethaneLog/GetAll',
    method: 'post',
    data:{
      site:'91',
      ...data,
    }
  })
},
getAllInf() {
  return request({
    url: 'api/Methane/GetAll',
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
    url: 'api/MethaneLog/Update',
    method: 'post',
    data:{
      site:'91',
      ...data,
    }
  })
},
 add(data) {
  return request({
    url: 'api/MethaneLog/Add',
    method: 'post',
    data:{
      site:'91',
      ...data,
    }
  })
},
 delet(data) {
  return request({
    url: 'api/MethaneLog/Delete',
    method: 'post',
    data:{
      site:'91',
      ...data,
    }
  })
},
}