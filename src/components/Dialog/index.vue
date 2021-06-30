<template>
  <transition name="fade">
    <div class="qt-dialog-wrapper" v-if="dialogShow" @click.self="changeShow">
      <div class="qt-dialog" :style="{ width, marginTop: top }">
        <div class="qt-dialog-header">
          <slot name="title">
            <span class="qt-dialog-title">{{ title }}</span>
          </slot>
          <button class="qt-dialog-headerbtn" @click="changeShow">
            <i class="qt-icon-close"></i>
          </button>
        </div>
        <div class="qt-dialog-body">
          <slot></slot>
        </div>
        <div class="qt-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
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
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '100px'
    }
  },
  methods: {
    changeShow () {
      this.$emit('update:dialogShow', false)
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
      ::v-deep .qt-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.fade-enter-active {
  animation: run 0.9s;
}
.fade-leave-active {
  animation: run 0.9s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
