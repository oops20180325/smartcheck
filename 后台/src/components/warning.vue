<template>
  <div style='position:fixed;top:120px;right:50px;'>
    <el-menu
        default-active="2"
        style='width:200px;'
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message-solid"></i>
            <span style='color:#fff'>报警</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">中三站 0个</el-menu-item>
            <el-menu-item index="1-2">中四站 5个</el-menu-item>
            <el-menu-item index="1-3">中五站 0个</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
  </div>
</template>
<script>
const props = {
  name: "raw-displayer",
  title: {
    required: true,
    type: String
  },
  value: {
    required: true
  }
};
export default {
  props,
  computed: {
    valueString() {
      return JSON.stringify(this.value, null, 2);
    }
  }
};
</script>
<style scoped>
pre {
  text-align: start;
}
</style>