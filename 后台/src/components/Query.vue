<template>
    <div class="form-query">
        <slot name="show"></slot>
        <div v-show="show.collapse">
            <slot name="hide"></slot>
        </div>
        <div>
            <el-form-item class="inline-block">
                <el-button type="primary" icon="el-icon-search" @click="$emit('search')" >
                    查找
                </el-button>
                <el-button plain icon="el-icon-refresh-left" @click="$emit('reset')" >
                    重置
                </el-button>
            </el-form-item>
            <span class="cursor-pointer inline-block text-blue-500 pl-2" @click="arrowClick" v-show="showArrow">
                <span v-if="!show.collapse">
                    <span>展开</span>
                    <i class="el-icon-arrow-down pl-1"></i>
                </span>
                <span v-else>
                    <span>收起</span>
                    <i class="el-icon-arrow-up pl-1"></i>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Query",
        data() {
            return {
                show: {
                    collapse: false
                }
            }
        },
        props: {
            showArrow: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            arrowClick() {
                let {collapse} = this.show
                this.show = {
                    ...this.show,
                    collapse: !collapse
                }
            },
        }
    }
</script>

<style scoped lang='scss'>
    .form-query {
        transition:all 0.8s;
        .el-form-item {
            margin-bottom: 14px;
        }
    }
    .cursor-pointer{
        span {
            color:#fff;
        }
    }
</style>