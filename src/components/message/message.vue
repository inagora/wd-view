<template>
  <transition name="wd-message-fade" @before-enter="animaEnter" @after-leave="animaLeave">
    <div v-show="visible" class="wd-message" :style="customStyle">
      <div>
        <div ref="messageNotice">
            <div class="wd-message-notice-content">
              <div :class="['wd-message-custom-content', 'wd-message-' + type]">
                <span v-if="type === 'info'" role="img" aria-label="info-circle" class="anticon anticon-info-circle"><svg focusable="false" class="" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg></span>
                <span v-else-if="type === 'success'" role="img" aria-label="check-circle" class="anticon anticon-check-circle"><svg focusable="false" class="" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg></span>
                <span v-else-if="type === 'warning'" role="img" aria-label="exclamation-circle" class="anticon anticon-exclamation-circle"><svg focusable="false" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg></span>
                <span v-else-if="type === 'error'" role="img" aria-label="close-circle" class="anticon anticon-close-circle"><svg focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></span>
                <span>{{message}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
/**
 * message: toast的内容
 * visible: toast显示/隐藏
 * duration: toast显示时长
 * position: toast显示的位置
 */
enum POSITION {
  top,
  center,
  bottom,
}
import { ref, computed, toRefs, onMounted } from "vue";
export default {
  name: "wd-message",
  props: {
    message: String,
    duration: {
      type: Number,
      default: 3000,
    },
    position: {
      type: Number,
      default: POSITION.center,
    },
    type: {
      type: String,
      default: 'info'
    },
    offset: {
      type: Number
    },
    zIndex: Number
  },
  emits: ['destroy'],
  setup(props, ctx) {
    let { duration } = toRefs(props);
    const visible = ref(true);
    const messageNotice = ref(null);
    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
        zIndex: props.zIndex,
      }
    })
    const animaEnter = () => {

    }
    const animaLeave = () => {
      ctx.emit('destroy');
    }
    onMounted(() => {
      messageNotice.value.classList.add('wd-message-notice');
      setTimeout(() => {
        visible.value = false;
      }, duration.value);
    });
    return {
      messageNotice,
      customStyle,
      animaEnter,
      animaLeave,
      visible,
    };
  },
};
</script>

<style lang="less">
@import url(./style/index);
</style>
