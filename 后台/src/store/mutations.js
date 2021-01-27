const mutations = {
    // 增加报警信息
    addAlarmArr(state,newAlarmObj){
        state.alarmArr.push(newAlarmObj);
    },
    // 删除报警信息
    deletAlarmArr(state){
        state.alarmArr.shift()
    },
    // 更新登录的站的信息-全部
    assignStationData(state,stationObj){
        Object.assign(state.station,stationObj);
    },
    // 更新登录的站的信息 -id
    setLoadStation(state,stationID){
        state.station.id = stationID
    },
    changePersonCount(state,data){
        let site = data.site||'z03';
        state.personAbout[site] = {
            in:Number(data.in) || 0,
            out:Number(data.out)  || 0,
            inside:Number(data.inside)  || 0
        }
        state.personAbout = Object.assign({},state.personAbout)
        // // state.personAbout.in += Number(data.in) || 0;
        // state.personAbout.in = Number(data.in) || 0;
        // // state.personAbout.out += Number(data.out)  || 0;
        // state.personAbout.out = Number(data.out)  || 0;
        // state.personAbout.inside = Number(data.inside)  || 0;
    },
    setactiveAlarmObj(state,data){
        // console.log(data)
        const alarm = state.alarmArr.find(item => item.alarmDeviceName == data || item.alarmPoint == data)
        state.activeAlarmObj = alarm;
    },
    deletactiveAlarmObj(state){
        var data = state.activeAlarmObj;
        console.log(data)
        if(data.id){
            const index = state.alarmArr.findIndex(item => item.id == data.id)
            console.log('index',index)
            state.alarmArr.splice(index,1)
        }
        state.activeAlarmObj = {};
    }
}
export default mutations
