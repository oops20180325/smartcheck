const state = {
   // 报警信息数组
  alarmArr:[
    // {"alarmStation":"z04","id":764,"alarmDeviceName":"总机关压力","alarmPoint":"z04pi503","alarmType":2,"ai":"4.98","checkJpg":"http://192.168.101.4:8022/image/z04/z04d9/z04pi503/20200423-121058.jpg","pks":"5.19","pksArr":[0,0,0,0,0],"abs":"0.2","alarmTypeMsg":"","alarmTime":"2020-04-23 12：10"}
  ],
  // 用于存储登录的站的信息
  station:{
    id:'z03'
  },
  //动态人员进出站相关
  personAbout:{
    // in:0,
    // out:0,
    // inside:0
  },
  activeAlarmObj:{

  }

}
export default state
