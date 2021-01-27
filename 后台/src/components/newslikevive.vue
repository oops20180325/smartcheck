<template>
 <div id="box" :style='`height:${height}px;`'  @mouseenter="Stop()" @mouseleave="Up()" >
      <ul id="con1" ref="con1" :class="{anim:animate==true}" class='aa'  >
          <li v-for='(item,index) in items' :key='index' :class='{ct:true}'>
             <span class='ieduiqi' >{{item.Pollingime}} </span> <span  class='ieduiqi' style='width:14em;overflow:hidden;'>{{item.Parameter}} </span>
             <el-tag :type='item.StatusName=="正常"?"success":"danger"' size='mini'>
                {{item.StatusName}}
            </el-tag>
          </li>
      </ul>
  </div>
</template>

 <script>
export default {
name:'news',
data() {
  return {
    animate:false,
    items:undefined,
    timer:undefined,
  }
},
props:{
    scrollarr:{
        tyle:Array,
        default:['item1','item2','item3']
    },
    height:{
        type:Number,
        default:30
    }
},
watch:{
    scrollarr:{
        immediate: true,
        handler(n,o){
            // console.log(9999999)
            this.items = [...n]
        }
    }
},
created(){
    // console.log(321,this.scrollarr)
    this.items = [...this.scrollarr]
    this.timer=setInterval(this.scroll,1000)
},
methods: {
    scroll(){
       this.animate=true;    
       setTimeout(()=>{      
               this.items.push(this.items[0]);  
               this.items.shift();               
               this.animate=false;  
       },500)
    },
    Stop(){
      clearInterval(this.timer);
    },
    Up(){
       this.timer=setInterval(this.scroll,1000)
    }
}
}
</script>

<style scoped>
#box{
    overflow: hidden;
}
.aa{
  margin-top:0px;
  transition: 'scale' 0.5s linear;
}
.anim{
    transition: all 0.5s;
    margin-top: -30px;
}
.ieduiqi{
 vertical-align: bottom;
}
.ct span{
    white-space: nowrap;

    display:inline-block;
    width:3em;
}
#con1 li{
    list-style: none;
    line-height: 30px;
    height: 30px;
}
</style>