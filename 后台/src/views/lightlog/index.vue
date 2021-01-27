<template>
  <div class="person">
      <el-row :gutter="20" class='tHead' align='middle' type='flex' >
        <el-col :span="6"><div class="tit">红外双视云台巡检记录</div></el-col>
        <el-col :span="14"><div class="">
        </div></el-col>
        <el-col :span="4"><div class="">
          <!--
          -->
          <el-button type="primary" @click='download'  size="medium" >下 载</el-button>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col style='padding-top:10px;'>
          <el-form ref="search" :model="searchOp" label-width="100px" size="small">
            <form-query @search="search" @reset="reset" :showArrow="false">
                <template slot="show">
                    <el-col :xs = "24" :sm = "12" :md="12" :lg = "8" :xl = "6">
                        <el-form-item  label="设备" prop="DeviceId">
                            <el-select v-model="searchOp.DeviceId" clearable placeholder="请选择" class="w-full">
                              <el-option
                                v-for="item in infops"
                                :key="item.Id"
                                :label="item.InfraredName"
                                :value="item.Id">
                              </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                   <el-col :xs = "24" :sm = "12" :md="12" :lg = "8" :xl = "6">
                    <el-form-item label="请输入日期" prop="dateRange">
                        <el-date-picker
                          size='small'
                          v-model="searchOp.dateRange"
                          type="daterange"
                          align="right"
                          unlink-panels
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          value-format='yyyy-MM-dd HH:mm:ss'
                          :default-time="['00:00:00', '23:59:59']"
                          class="w-full"
                          >
                        </el-date-picker>
                    </el-form-item>
                  </el-col>
                    
                    
                </template>
                <template slot="hide">
                  
                   
                </template>
            </form-query>
          </el-form>
        </el-col>
      </el-row>

      <el-row class='tBody mh-5' v-loading='loading' style='minHeight:650px;'>
         <el-col :span="24"><div class="">
             <el-row type="flex" :gutter="20" class="flw" justify="start">
              <el-col v-for="item in tableData" :key="item.Id" class="wa" :span="6">
                <el-card  :body-style="{ padding: '0px' }"  shadow="hover" style="width:100%">
                  
                  <img v-viewer  style='width: 100%; height:auto' :src="item.ImgUrl" class="image">
                  <div style="padding: 5px;">
                    <div class="">
                      设备名称:{{item.InfraredName}}
                    </div>
                    <div class="">
                      点位名称:{{item.InfraredPoint}}
                    </div>
                    <div class="">
                      检测时间:{{item.Dt}}
                    </div>
                    <div class="">
                      检测读值:{{item.Val +'℃'}}
                    </div>
                    <div style="text-align:right;cursor:pointer;" @click="opeanEdit(item)"> 
                      查看详情
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col v-if='tableData.length==0'  style='height:500px;'>
                  <el-table
                    :data="[]"
                    style="width: 100%">
                  </el-table>
              </el-col>
            </el-row>
         </div></el-col>
      </el-row>
       <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync='currentpage'
        @current-change='pageChange'
         :total="total">
      </el-pagination>

      <!-- dialog -->
      <el-dialog title="详情" :visible.sync="dialogFormVisible"  width='700' top='12vh' >
        <el-form :model="form" disabled>
           <el-form-item label="设备名称" :label-width="formLabelWidth" >
              <el-input v-model="form.InfraredName" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="点位名称" :label-width="formLabelWidth" >
            <el-input v-model="form.InfraredPoint" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="点位读值" :label-width="formLabelWidth">
            <el-input v-model="form.Val" autocomplete="off"><template slot="append">mmp.m</template></el-input>
          </el-form-item>
         
          <el-form-item label="巡检时间" :label-width="formLabelWidth" >
            <el-input v-model="form.Dt" autocomplete="off"></el-input>
          </el-form-item>
         
          <el-form-item label="巡检批次" :label-width="formLabelWidth" >
              <el-input v-model="form.Num" placeholder='' autocomplete="off"></el-input>
          </el-form-item>
          
         
        </el-form>
        <!--

         <div class='big big1' >
          <img :src = "map" style=' position:absolute;width:100%;height:100%;' />
          <span class='small small1' @mousedown='small_down' :style='{"top":form.AxisY,"left":form.AxisX}' ></span>
        </div>
        -->
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false"  size="mini">关 闭</el-button>
          <!--
          <el-button type="primary" @click="edit"  size="mini">确 定</el-button>
          -->
        </div>
      </el-dialog>

      <el-dialog title="注意" :visible.sync="dialogDeletVisible" width='400' top='40vh'>
       <p>
        请确认是否删除该点位！
       </p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDeletVisible = false"  size="mini">关 闭</el-button>
        <!--
        <el-button type="primary" @click="delet"  size="mini">确 定</el-button>
        -->
      </div>
      </el-dialog>
  </div>
</template>

<script>
import api from '../../api/lightlog.js'
import {_SessionStore} from '../../common/utils/storage.js'
import FormQuery from '../../components/Query.vue'
// import z08 from '../../assets/image/z8.jpg'
export default {
    data() {
      return {
        infops:[],
        map:'',
        userinfo:undefined,
        deletcamid:'',
        dialogDeletVisible:false,
        dialogFormVisible :false,
        formLabelWidth: '80px',
        form:{
          Id:'',
          DeviceId:'',
          PointNo:'',
          PointName:'',
          LimitMax:'',
          Axis3D:''
        },
        loading:false,
        
        searchOp: {
          dateRange:[]
        },
        currentpage:1,
        total:0,
        tableData: []
      };
    },
    components:{
      FormQuery
    },
    filters:{
      Typefilter:(val)=>{
        if (val==1) return '表盘读值';
        if (val==2) return '液位读值';
        if (val==3) return '阀门开关';
        return '--'
      }
    },
    methods:{
      setmap(data){

        switch(data) {
          case 'z08':
              this.map = '';
              break;              
          default:
              this.map = '';
        }
      },
      small_down() {  
        console.log(1)
          var obig = document.querySelector(".big1");  
          var osmall = document.querySelector('.big1 .small1')  
          var e =  window.event;  
          var maxw = obig.offsetWidth - osmall.offsetWidth;
          var maxh = obig.offsetHeight - osmall.offsetHeight;
          osmall.startX = e.clientX - osmall.offsetLeft;  
          osmall.startY = e.clientY - osmall.offsetTop;  
          var that = this;
          document.onmousemove = function(e) {  
            console.log('move')
              var e =  window.event;  
              var regw = e.clientX - osmall.startX;
              var regh = e.clientY - osmall.startY;
              console.log(regw)
              requestAnimationFrame(()=>{
                
                if(regw<=0){
                  that.form.AxisX = 0 +"%";
                }else if(regw>=maxw){
                  that.form.AxisX = (maxw/obig.offsetWidth*100).toFixed(2) + "%";
                }else{
                  that.form.AxisX = (regw/obig.offsetWidth*100).toFixed(2) + "%";
                }
                if(regh<=0){
                  that.form.AxisY = 0 + "%";
                }else if(regh>=maxh){
                  that.form.AxisY = (maxh/obig.offsetHeight*100).toFixed(2) +"%";
                }else{
                  that.form.AxisY = (regh/obig.offsetHeight*100).toFixed(2)  + "%";  
                }
                that.$forceUpdate();
               
              })
              
          };  
          document.onmouseup = function() {  
              document.onmousemove = null;  
              document.onmouseup = null;  
          };  
      },
      opeanEdit(row){
        // console.log(row)
         this.form =Object.assign({},row) ;
         this.dialogFormVisible = true;
      },
      opeanDelet(row){
        this.dialogDeletVisible = true;
        this.deletcamid = row.Id;
      },
      edit(){
          // console.log(data)
          if(!this.form.Id){
            
            api.add(this.form).then(res=>{
              if(res.code == 200){
                this.$message.success(res.msg||'添加成功');
                this.dialogFormVisible = false;
                 this.currentpage = 1;
                this.getTableList()
              }else{
                this.$message.error(res.msg);
              }
            })
          }else{
            api.edit(this.form).then(res=>{
              if(res.code == 200){
                this.$message.success(res.msg);
                this.dialogFormVisible = false;
                
                this.getTableList({
                  Current: this.currentpage,
                  ...this.searchOp
                })
              }else{
                this.$message.error(res.msg);
              }
             
            })

          }
      },
     delet(){
       let data = {
          id:this.deletcamid,
        }
        api.delet(data).then(res=>{
          this.$message.success(res.msg);
          this.deletcamid = '';
           this.dialogDeletVisible = false;
          this.getTableList({
            Current:this.currentpage,
             ...this.searchOp
          })
        })
     },
     openAdd(){
        this.form = {
          Id:'',
           DeviceId:'',
          PointNo:'',
          PointName:'',
          LimitMax:'',
          Axis3D:''
         }
         this.dialogFormVisible = true;
     },
      search(){
        this.currentpage = 1;
        this.getTableList(this.searchOp)
      },
      reset(){
          this.$refs.search.resetFields();
      },
     
      // 获取列表
      getTableList(data={
        "Current": 1,

      }){
        this.loading = true;
        api.getTableList({
          PageSize:10,
          ...data
        }).then(res=>{
          this.tableData = res.data||[];
          this.total = res.total || 1 ;
          //  this.$message.success('查询成功')
        }).finally(()=>{
          this.loading = false;
        })
      },
      // 页面改变
      pageChange(page){
          this.getTableList({
          "Current": page,
          ...this.searchOp
          })
        
      },
      checkrole(data=''){
        var fl1= (this.userinfo).Power==1;
        var obj = JSON.parse(this.userinfo.FunList).sxtgl||[];
        var fl2 = obj.findIndex(ite=>ite==data) != -1 ;
        return !(fl1||fl2)
      },
       envInit(){
        api.getAllInf().then(res=>{
          this.infops= res.data||[];
        })
      },
      download(){
        if(this.searchOp.dateRange.length == 0){
          this.$message({
            message: '请选择时间范围',
            type: 'warning'
          });
          return
        }
        var day = 86400000;
        var range = new Date(this.searchOp.dateRange[1]).getTime() - new Date(this.searchOp.dateRange[0]).getTime();
        console.log(Math.round(range/day))
        if(Math.round(range/day) >= 31){
           this.$message({
            message: '时间范围过大，最多选择一个月',
            type: 'warning'
          });
          return
        }
        api.dw({
          Current: this.currentpage,
          ...this.searchOp,
          dateRange:this.searchOp.dateRange.toString()
        })
      }
    },
    mounted(){
      this.getTableList();
       this.envInit();
      // this.setmap(this.$route.query.id);  
      
     
    },
    created(){
      let userinfo =  _SessionStore.get('userinfo');
      // console.log(userinfo)
      this.userinfo = userinfo

    },
  };
</script>

<style  lang='scss'>

  .person{
    .el-card.is-hover-shadow:hover{
      box-shadow: 0 2px 12px 0 rgb(13, 238, 123);
    }
    .flw{
      flex-wrap: wrap;
    }
    .wa{
      margin-bottom: 10px;
    }
     .el-dialog__header{
       border-bottom: 2px solid #ccc;
     }
     .big{
      user-select:none;
      position:relative;
      width:100%;
      height:300px;
      background: rgb(193, 193, 193);
    }
    .small{
      cursor:move;
      position:absolute;
      top:50%;
      left:50%;
      border:1px solid red;
      width:15px;
      height:15px;
      border-radius:50%;
      background:red;
    } 
    
  }
</style>