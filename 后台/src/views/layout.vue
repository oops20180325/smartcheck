<template>
  <el-container class='layout'>
    <el-header v-if="opall" class="glheader" height="50px">
        <el-row>
          <el-col :span="6">
            <div class='glhr'>logo</div>
          </el-col>
          <el-col v-bind:span="12">
            <div class='glhr' >title</div>
          </el-col>
          <el-col :span="6">
            <div class='glhr'>
                <el-radio-group v-model="isCollapse"  size="small">
                  <el-radio-button :label="false" >菜单展开</el-radio-button>
                  <el-radio-button :label="true">菜单收起</el-radio-button>
                </el-radio-group>
                <el-dropdown @command="handleCommand">
                  <el-row>
                    <el-col :span="24" class="glhr_qpt glhr">
                      <el-avatar v-if="userinfo&&userinfo.avator" icon="el-icon-user-solid" ></el-avatar>
                      <el-avatar v-else src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                      张三
                    </el-col>
                  </el-row>  
                  <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item icon="el-icon-circle-check" command="out" >退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </div>
          </el-col>
        </el-row>
    </el-header>
    <el-container>
     
      <el-aside v-if="opall" width="auto" class="side">
      
        <el-menu
          default-active="/home/user"
          class="el-menu-vertical-demo"
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          >
                       

                <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>红外激光</span>
                    </template>
                    <el-menu-item index="/home/lightmeter"
                      
                      :route="{path: '/home/lightmeter',}"
                    >
                    <i class="el-icon-location" ></i>
                      <span slot="title">红外双视设备</span>    

                    </el-menu-item>
                    <el-menu-item index="/home/ch4meter"
                      
                      :route="{path: '/home/ch4meter',}"
                    >
                    <i class="el-icon-location" ></i>
                      <span slot="title">激光甲烷设备</span>    

                    </el-menu-item>
                    <el-menu-item index="/home/lightpoint"
                      
                      :route="{path: '/home/lightpoint',}"
                    >
                    <i class="el-icon-location" ></i>
                      <span slot="title">红外激光点位设置</span> 

                    </el-menu-item>
                    <el-menu-item index="/home/ch4point"
                      
                      :route="{path: '/home/ch4point',}"
                    >
                    <i class="el-icon-location" ></i>
                      <span slot="title">激光甲烷点位配置</span>    

                    </el-menu-item>
                    <el-menu-item index="/home/ch4log"
                      
                      :route="{path: '/home/ch4log',}"
                    >
                    <i class="el-icon-location" ></i>
                      <span slot="title">激光甲烷巡检记录</span>    

                    </el-menu-item>
                    <el-menu-item index="/home/lightlog"
                      
                      :route="{path: '/home/lightlog',}"
                    >
                    <i class="el-icon-location" ></i>
                      <span slot="title">红外双视巡检记录</span>    

                    </el-menu-item>
                    <el-menu-item index="/home/lightalarm"
                      
                      :route="{path: '/home/lightalarm',}"
                    >
                    <i class="el-icon-location" ></i>
                      <span slot="title">红外双视报警记录</span>    

                    </el-menu-item>
                    <el-menu-item index="/home/ch4alarm"
                      
                      :route="{path: '/home/ch4alarm',}"
                    >
                    <i class="el-icon-location" ></i>
                      <span slot="title">激光甲烷报警记录</span>    

                    </el-menu-item>
                </el-submenu >
                
                
               
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
       
      </el-container>
    </el-container>
   

  </el-container>
</template>

<script>
import {_SessionStore} from '../common/utils/storage.js'
import {mapState} from 'vuex'
  console.log(process.env)
  export default {
    data(){
      return{
        opall:false,
        isCollapse: true,
        userinfo:undefined,
        chart1:null,
      } 
    },
    methods:{
      handleCommand(cmd){
        console.log(666)
        if(cmd=='out'){
         this.$router.push({path: '/login'})
        }
      }
    },
    
  }
</script>

<style  lang= 'scss'>
.layout{
    min-width:1280px;
    height:100%;
    // 主背景
    .el-main{
      // background-color:#03151beb;
      background-image: url('../assets/bg.jpg');
      background-size:100% 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .glheader{
      color:#fff;
      background-color: #545c64;
      .glhr{
        display:flex;
        justify-content:space-around;
        align-items:center;
        height:50px;
      }
      .glhr_qpt{
        .el-avatar{
          margin-right:15px;
        }
        color:#fff;
      }
    }
    .side{
      background-color:#545c64;
      .logo{
        padding:4px 10px;
        color:#fff;
        font-size:30px;
        line-height:40px;
      }
    }
    .footer{
      text-align:center;
    }
    .el-submenu__title i{
      color:#fff;
    }

  

}

</style>