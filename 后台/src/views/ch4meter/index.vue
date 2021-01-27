<template>
  <div class="person">
      <el-row :gutter="20" class='tHead' align='middle' type='flex' >
        <el-col :span="6"><div class="tit">激光甲烷遥测设备管理</div></el-col>
        <el-col :span="14"><div class="">
        </div></el-col>
        <el-col :span="4"><div class="">
          <el-button type="primary" @click='openAdd'  size="medium" >新 增</el-button>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col style='padding-top:10px;'>
          <el-form ref="search" :model="searchOp" label-width="100px" size="small">
            <form-query @search="search" @reset="reset" :showArrow="false">
                <template slot="show">
                    <el-col :xs = "24" :sm = "12" :md="12" :lg = "8" :xl = "6">
                        <el-form-item  label="设备名称" prop="MethaneName">
                            <el-input v-model="searchOp.MethaneName" clearable></el-input>
                        </el-form-item>
                    </el-col>
                   
                    
                    
                </template>
                <template slot="hide">
                  
                    
                </template>
            </form-query>
          </el-form>
        </el-col>
      </el-row>

      <el-row class='tBody'>
         <el-col :span="24"><div class="">
            <el-table
              v-loading='loading'
              :data="tableData"
              :height='670'
              style="width: 100%;">
              <el-table-column
                prop="index"
                label="序号"
                min-width="8">
                      <template slot-scope='scope' >
                        {{scope.$index +1}}
                    </template>
              </el-table-column>
              <el-table-column
                prop="MethaneName"
                label="设备名称"
                min-width="18">
              </el-table-column>
              <el-table-column
                prop="MethaneIp"
                label="甲烷ip"
                min-width="18">
              </el-table-column>
              <el-table-column
                prop="MethanePort"
                label="甲烷端口"
                min-width="15">
              </el-table-column>
              <el-table-column
                prop="MethaneUser"
                label="甲烷用户"
                min-width="18">
              </el-table-column>     
              <el-table-column
                prop="MethanePwd"
                label="甲烷密码"
                min-width="15">
              </el-table-column>         
              <el-table-column
                prop="CameraIp"
                label="可见光ip"
                min-width="18">
              </el-table-column>
              <el-table-column
                prop="CameraPort"
                label="可见光端口"
                min-width="18">
              </el-table-column>
              <el-table-column
                prop="CameraUser"
                label="可见光用户"
                min-width="18">
              </el-table-column>     
              <el-table-column
                prop="CameraPwd"
                label="可见光密码"
                min-width="15">
              </el-table-column>         
              
             
              <el-table-column
                prop=""
                min-width="35"
                label="操作">
                    <template slot-scope="scope">
                        <div >
                            <el-button type="primary"  @click='opeanEdit(scope.row)'    size="mini">编辑</el-button>
                            <el-button type="danger"  @click='opeanDelet(scope.row)'    size="mini">删除</el-button>  
                        </div>
                  </template>
              </el-table-column>
            </el-table>
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
      <el-dialog title="设备管理" :visible.sync="dialogFormVisible"  width='600' top='5vh' >
        <el-form :model="form">
          <el-form-item label="设备名称" :label-width="formLabelWidth">
            <el-input v-model="form.MethaneName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="甲烷ip" :label-width="formLabelWidth">
            <el-input v-model="form.MethaneIp" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="甲烷端口" :label-width="formLabelWidth">
            <el-input v-model="form.MethanePort" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="甲烷用户" :label-width="formLabelWidth">
            <el-input v-model="form.MethaneUser" autocomplete="off"></el-input>
          </el-form-item>
         <el-form-item label="甲烷密码" :label-width="formLabelWidth">
            <el-input v-model="form.MethanePwd" autocomplete="off"></el-input>
          </el-form-item>
          
          <el-form-item label="可见光ip" :label-width="formLabelWidth">
            <el-input v-model="form.CameraIp" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="可见光端口" :label-width="formLabelWidth">
            <el-input v-model="form.CameraPort" autocomplete="off"></el-input>
          </el-form-item>
         <el-form-item label="可见光用户" :label-width="formLabelWidth">
            <el-input v-model="form.CameraUser" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="可见光密码" :label-width="formLabelWidth">
            <el-input v-model="form.CameraPwd" autocomplete="off"></el-input>
          </el-form-item>
         
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false"  size="mini">取 消</el-button>
          <el-button type="primary" @click="edit"  size="mini">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="注意" :visible.sync="dialogDeletVisible" width='400' top='40vh'>
       <p>
        请确认是否删除该检设备！
       </p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDeletVisible = false"  size="mini">取 消</el-button>
        <el-button type="primary" @click="delet"  size="mini">确 定</el-button>
      </div>
      </el-dialog>
  </div>
</template>

<script>
import api from '../../api/ch4meter.js'
import {_SessionStore} from '../../common/utils/storage.js'
import FormQuery from '../../components/Query.vue'
export default {
    data() {
      return {
        userinfo:undefined,
        deletcamid:'',
        dialogDeletVisible:false,
        dialogFormVisible :false,
        formLabelWidth: '100px',
        form:{
          Id:'',
          MethaneName:'',
          MethaneIp:'',
          MethanePort:'',
          MethaneUser:'',
          MethanePwd:'',
          CameraIp:'',
          CameraPort:'',
          CameraUser:'',
          LoginPwd:'',
        },
        loading:false,
        
        searchOp: {
          MethaneName:'',
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
     
    },
    methods:{
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
          MethaneName:'',
          MethaneIp:'',
          MethanePort:'',
          MethaneUser:'',
          MethanePwd:'',
          CameraIp:'',
          CameraPort:'',
          CameraUser:'',
          LoginPwd:'',
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
      }
    },
    mounted(){
      this.getTableList()
     
    },
    created(){
      // let userinfo =  _SessionStore.get('userinfo');
      // console.log(userinfo)
      // this.userinfo = userinfo

    },
  };
</script>

<style  lang='scss'>

  .person{
      
     .el-dialog__header{
       border-bottom: 2px solid #ccc;
     }
      
    
  }
</style>