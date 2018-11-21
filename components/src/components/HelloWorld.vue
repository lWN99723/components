<template>
  <div class="hello">
    <div class="header">header</div>
    <div class="content">
      <h1>element-ui</h1>
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
      </el-row>
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
      <h1>mint-ui</h1>
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
      <mt-button plain>plain</mt-button>
      <mt-radio title="单选框列表" v-model="options.value" :options="options">
      </mt-radio>
      <span>{{options.value}}</span>
    </div>
    <div class="footer">footer</div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      options:[]
    }
  },
  props: {
    msg: String
  },
  created(){
    this.getOptions();
       },
  methods:{
    getOptions(){
      this.options = [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        }
      ];
    }
  }
}
</script>
<style>
  .hello{
    display:flex;
    height:100vh;
    width:100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .header,.footer{
    height:40px;
    background:red;
    color:#fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
  }
  .content{
    overflow-y: scroll;
    height:calc(100vh - 80px);
  }
</style>
