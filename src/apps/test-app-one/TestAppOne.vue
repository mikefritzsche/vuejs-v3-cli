<template>
<div class="row">
  <div class="columns small-12">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

  <!-- All routes use this for modal content -->
  <modal-vue
    :width="modalWidth"
    :allow-click-outside="modalAllowClickOutside"
    v-if="showModalVue"
  >
    <template v-slot:header>
      <h4>{{ modalHeader }}</h4>
    </template>
    <template v-slot:body>
      <component
        style="clear: both"
        :is="modalComponent"
        v-bind="modalProps"
      />
    </template>
  </modal-vue>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TestAppOne',
  components: {
    components: {
      ModalVue: () => import(/* webpackChunkName: "modal-vue" */'@/components/ModalVue.vue')
    }
  },
  computed: {
    ...mapState([
      'modalAllowClickOutside',
      'modalComponent',
      'modalHeader',
      'modalProps',
      'modalWidth',
    ])
  },
  methods: {
    ...mapActions(['setHeaderButtons'])
  }
}
</script>

<style lang="scss" scoped></style>
