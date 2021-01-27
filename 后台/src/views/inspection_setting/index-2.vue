<template>
  <div class="inspection_setting">
          <el-row :gutter="20" class='tHead' align='middle' type='flex' >
        <el-col :span="3"><div class="tit">自动巡检设置</div></el-col>
        <el-col :span="5"><div class="">

          <el-time-picker
              v-model="insTime"
              :picker-options="{
                    selectableRange: '08:00:00 - 18:00:00',
                    format:'HH:mm'
                    }"
              value-format='HH:mm'
              placeholder="选择时间">
          </el-time-picker>

        </div></el-col>
        <el-col :span="14"><div class="">
            <el-button type="primary" class="startBtn" @click='saveSetting'  >保 存</el-button>
            <span style = 'color:red;padding-left:20px;font-weight:600;' >温馨提示：请设置几点开始巡检，否则无法开始自动巡检</span>
        </div></el-col>
      </el-row>
      <el-row class='tBody'>
         <el-col :span="24"><div class="">
            <el-table
              v-loading="loading"
              :data="tableData"
              style="width: 100%;">
              <el-table-column
                prop="index"
                label="序号"
                width="180">
                  <template slot-scope='scope' >
                      {{scope.$index +1}}
                  </template>
              </el-table-column>
              <el-table-column
                prop="_starttime"
                label="时间"
                min-width="100">
              </el-table-column>
              <el-table-column
                prop="_facilityname"
                label="设备名称"
                min-width="180">
              </el-table-column>
              <el-table-column
                prop="date"
                label="删除设置"
                width="180">
                  <template slot-scope="scope">
                    <el-button @click="delettimeSeting(scope)" type="danger"   size="small">删 除</el-button>
                  </template>
              </el-table-column>
            </el-table>
         </div></el-col>
      </el-row>
  </div>
</template>

<script>
 import { mapState } from 'vuex'
 import api from '../../api/inspection_setting.js'
 import {_SessionStore} from '../../common/utils/storage.js'
export default {
    data() {
      return {
        userinfo:undefined,
        loading:true,
        tableData:[{
          id:123,
          index:1,
          time:'09：00',
          shebei:'中3站加热炉、中3站泵房定云台、中3站泵房顶球机、中3站泵房内球机、中3站增压站云台'
        }],
        insTime:''//时间
      };
    },
     computed:{
      ...mapState([
        'insArr'
      ])
    },
    methods:{
      // 删除设置
      delettimeSeting(scope) {
          // console.log(scope)
          api.deletInsItem({
            ID:scope.row._id
          }).then(res=>{
            this.$message.success('操作成功')
            this.getTableList()
          }).catch(err=>{
            this.$message.error('操作失败')
          })
      },
      // 保存时间设置
      saveSetting(){
        // console.log(this.insTime)
        if(!this.insTime){
          this.$message({
              message: '请选择巡检时间',
            type: 'warning'
          })
          return
        }
        if(this.insTime!= null){
           let haveAlready = false;
           this.tableData.forEach((item,index,arr)=>{
             if(item.StartTime === this.insTime) haveAlready = true;
           })
          // console.log(haveAlready)
           if(haveAlready){
             this.$message({
                message: '请勿重复添加巡检时间',
                type: 'warning'
             })

          }else{
            api.saveInsItem({
              Starttime:this.insTime,
              Site:this.$route.query.id||'',
            }).then(res=>{
                this.$message.success('操作成功')
                this.getTableList()
            }).catch(err=>{
               this.$message.error('操作失败')
            })
          }
        }
      },
      // 获取table数据
      getTableList(){
        this.loading = true;
        api.getInsList({
          // 哪个站
           Site:this.$route.query.id||'',
          // 分页等
        }).then(res=>{
          // console.log(res)
          this.tableData = res.ResultData||[];
        }).finally(()=>{
           this.loading = false;
        })
      },
      checkrole(data=''){
        var fl1= (this.userinfo).Power==1;
        var obj = JSON.parse(this.userinfo.FunList).xjsz||[];
        var fl2 = obj.findIndex(ite=>ite==data) != -1 ;
        return !(fl1||fl2)
      }
    },
    mounted(){
      // 发起请求 获取表格数据
      this.getTableList()


    },
    created(){
      let userinfo =  _SessionStore.get('userinfo');
      // console.log(userinfo)
      this.userinfo = userinfo

    },
  };
</script>
<style lang='scss'>
.inspection_setting{
     
    
  }
</style>