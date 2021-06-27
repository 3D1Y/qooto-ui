<template>
  <div class="qt-dialog-wrapper">
    <div class="qt-dialog">
      <div class="qt-dialog-header">
        <slot name="qt-dialog-header">
          <span class="qt-dialog-title">{{ title }}</span>
        </slot>
        <button class="qt-dialog-headerbtn" @click="changeShow">
          <i class="qt-icon-close"></i>
        </button>
      </div>
      <div class="qt-dialog-body">
        <slot></slot>
      </div>
      <div class="qt-dialog-footer">
        <qt-button>取消</qt-button>
        <qt-button type="primary">确定</qt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qt-dialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    dialogShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeShow () {
      console.log('shuchule')
      this.$emit('update:dialogShow', false)
      console.log('dialogShow', this.dialogShow)
    }
  }
}
</script>

<style lang="scss" scoped>
.qt-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  .qt-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    & .qt-dialog-header {
      padding: 20px 20px 10px;
      .qt-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .qt-dialog-headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    & .qt-dialog-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    & .qt-dialog-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .qt-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
