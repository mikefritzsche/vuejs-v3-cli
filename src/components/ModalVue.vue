<template>
  <transition name="modal">
    <div ref="modal" class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          v-click-outside="clickOutsideClose"
          :class="[width, height]"
          :style="{ maxHeight: `${maxHeight}px` }"
        >
          <div class="modal-header capitalize left">
            <slot name="header"></slot>
          </div>
          <div class="modal-header-close right" v-if="showCloseButton">
            <div class="icon icon-remove" @click="closeModal"></div>
          </div>
          <div
            class="modal-body"
            :style="{ maxHeight: `${maxHeight - 100}px` }"
          >
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * props -
 *    width: 'default', 'wide','wide-tall', 'wide-scroller', 'video'
 *    height: 'full-height'
 *    close: callback to clean up when modal is closed
 */
import { mapActions } from "vuex";

import ClickOutside from "@/modules/click-outside";

export default {
  directives: {
    ClickOutside,
  },
  props: {
    width: {
      type: String,
      default: "default",
    },
    height: {
      String,
      default: "",
    },
    scroll: {
      type: Boolean,
      default: true,
    },
    showModal: {
      type: Boolean,
      default: false,
    },
    close: {
      type: [String, Function],
      default: "",
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
    allowClickOutside: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    maxHeight: 300,
  }),
  created() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  },
  mounted() {
    this.maxHeight = window.innerHeight * 0.8;
    window.addEventListener("resize", this.resizeModal);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeModal);
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
  },
  methods: {
    ...mapActions(["setShowModalVue"]),
    clickOutsideClose() {
      if (this.allowClickOutside) {
        this.closeModal();
      }
    },
    closeModal() {
      this.$nextTick(() => {
        if (typeof this.close === "function") {
          this.close();
        }
        this.setShowModalVue(false);
      });
    },
    resizeModal() {
      this.maxHeight = window.innerHeight * 0.8;
    },
  },
};
</script>

<style lang="scss">
body.modal-open {
  overflow: hidden;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    /** Scrolling behavior */
    overflow-y: hidden;
    overflow-x: visible;
    margin: 0 auto;
    background-color: $white;
    border-radius: rem-calc(0);
    box-shadow: rem-calc(0 2 8) rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    padding: rem-calc(30);
    &.default {
      width: rem-calc(600);
    }
    &.wide {
      width: rem-calc(1200);
    }
    &.video {
      width: rem-calc(1200);
      text-align: center;
      .modal-header {
        margin-left: rem-calc(39);
      }
    }
    &.qr-code {
      width: rem-calc(430);
      height: rem-calc(490);
    }

    .modal-header {
      div {
        font-size: rem-calc(24);
        font-weight: $font-weight-extra-light;
      }
      sup {
        font-size: rem-calc(11);
      }
    }
    .modal-header-close {
      position: relative;
      top: rem-calc(-20);
      left: rem-calc(18);
      div {
        cursor: pointer;
      }
    }
    .modal-body {
      overflow-y: auto;
      overflow-x: hidden;
      clear: both;
      font-size: $body-font-size;
      margin-top: rem-calc(50);
      .row {
        p {
          margin-bottom: rem-calc(24);
        }
        &.sticky {
          position: sticky;
          bottom: 0;
          right: 0;
        }
      }
      .tos {
        margin-bottom: rem-calc(20);
      }
    }
    .button {
      margin: rem-calc(14 0 0 0);
      &.secondary {
        margin-right: rem-calc(10);
      }
    }
  }
}
</style>
