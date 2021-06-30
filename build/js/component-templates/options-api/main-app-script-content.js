module.exports = function(ComponentName) {
    return `<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: '${ComponentName}',
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
</script>`
}