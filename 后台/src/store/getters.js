// vuex getters
export default {
// 当前报警信息集合
activeAlarmObj:state => {
  let obj  =  state.alarmArr[0] || []

  // return obj
  // 后面切换过来
  return state.activeAlarmObj 
},
// 报警设备名字
activeAlarmDevice: state => {
  // console.log(996,state.alarmArr)
  let name =  state.alarmArr.length>0 ?state.alarmArr[0].alarmDeviceName : ''
  // console.log(name)
  return name
},
// 报警点名字
activeAlarmPoint: state => {
  // console.log(996,state.alarmArr)
  let name = state.alarmArr.length > 0 ? state.alarmArr[0].alarmPoint : ''
  // console.log(name)
  return name
},
alarmPointtotal:state =>{
  const alarmArr = state.alarmArr;
  let pointArr = [];
  alarmArr.forEach((item,index,arr)=>{
    const result = pointArr.findIndex(ite=>{
      // console.log(ite)
      return ite.name === item.alarmStation 
    })
    // console.log(result)
    if(result === -1){
      pointArr.push({
        name:item.alarmStation,
        num:1
      })
    }else{
      pointArr[result].num++
    }
  })

  return pointArr
},
// 获取某个站的 报警信息
findAlarmPoint: state => siteId=>{
  return state.alarmArr.filter(item => item.alarmStation===siteId) || []
}

}
