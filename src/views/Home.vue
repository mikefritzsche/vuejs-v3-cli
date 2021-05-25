<template>
  <div class="home">
    <test-one/>
    <my-test-component></my-test-component>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { defineAsyncComponent } from 'vue'
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const MyTestComponent = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: 'my-test-component' */'@/components/MyTestComponent/MyTestComponent.vue'),
  loadingComponent: Loading
})
const TestOne = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: 'test-one' */'@/components/TestOne/TestOne.vue'),
  loadingComponent: Loading
})

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyTestComponent,
    TestOne
  },
  computed: {
    ...mapState(['api'])
  },
  watch: {
    api: {
      async handler(api) {
        if (Object.keys(api).length) {
          await this.api.analytics.search().then(resp => {
            console.log('api.analytics.search: ', resp)
          })
          await this.api.champaign.campaigns().then(resp => {
            console.log(resp)
          })
        }
      },
      immediate: true
    }
  },
  created() {
    console.log('created api: ', this.api)
  }
}
</script>
