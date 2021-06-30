<template>
  <div id="app">
    <!-- <div class="row">
      <qt-button>默认按钮</qt-button>
      <qt-button type="primary">主要按钮</qt-button>
      <qt-button type="success">成功按钮</qt-button>
      <qt-button type="info">信息按钮</qt-button>
      <qt-button type="warning">警告按钮</qt-button>
      <qt-button type="danger">危险按钮</qt-button>
    </div>
    <div class="row">
      <qt-button plain>朴素按钮</qt-button>
      <qt-button plain type="primary">主要按钮</qt-button>
      <qt-button plain type="success">成功按钮</qt-button>
      <qt-button plain type="info">信息按钮</qt-button>
      <qt-button plain type="warning">警告按钮</qt-button>
      <qt-button plain type="danger">危险按钮</qt-button>
    </div>
    <div class="row">
      <qt-button round plain>圆角按钮</qt-button>
      <qt-button round plain type="primary">主要按钮</qt-button>
      <qt-button round plain type="success">成功按钮</qt-button>
      <qt-button round plain type="info">通知按钮</qt-button>
      <qt-button round plain type="warning">警告按钮</qt-button>
      <qt-button round plain type="danger">危险按钮</qt-button>
    </div>
    <div class="row">
      <qt-button circle plain>点</qt-button>
      <qt-button circle plain type="primary">点</qt-button>
      <qt-button circle plain type="success">点</qt-button>
      <qt-button circle plain type="info">点</qt-button>
      <qt-button circle plain type="warning">点</qt-button>
      <qt-button circle plain icon="qt-icon-ashbin" type="danger">点</qt-button>
    </div>
    <div class="row">
      <qt-button circle plain icon="qt-icon-ashbin"></qt-button>
      <qt-button circle plain icon="qt-icon-ashbin" type="primary"></qt-button>
      <qt-button circle plain icon="qt-icon-ashbin" type="success"></qt-button>
      <qt-button circle plain icon="qt-icon-ashbin" type="info"></qt-button>
      <qt-button circle plain icon="qt-icon-ashbin" type="warning"></qt-button>
      <qt-button circle plain icon="qt-icon-ashbin" type="danger"></qt-button>
    </div>
    <div>
      <qt-button @click="handleClick"> 点击功能 </qt-button>
    </div> -->
    <qt-button type="primary" @click="dialogShow = true">点击</qt-button>
    <qt-dialog
      title="提示"
      :dialogShow.sync="dialogShow"
      width="300px"
      top="100px"
    >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <qt-button @click="dialogShow = false">取消</qt-button>
        <qt-button type="primary" @click="dialogShow = false">确定</qt-button>
      </template>
    </qt-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      dialogShow: false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .qt-button {
    margin-right: 20px;
  }
}
</style>
