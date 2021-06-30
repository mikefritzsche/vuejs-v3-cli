module.exports = function (ComponentName) {
    return `
    <template>
        <div class="row">
            <div class="columns small-8">
                <div>${ComponentName} main content</div>
            </div>
            <div class="columns small-4 sticky">
                <div>${ComponentName} sidebar</div>
            </div>
        </div>
    </template>

    <script>
    import { computed, defineComponent, h, reactive, toRefs } from 'vue'
    import { useStore } from 'vuex'
    
    export default defineComponent({
        name: '${ComponentName}',
        props: {
            /** Test id for unit tests */
            testId: {
                type: String,
                default: ''
            }
        },
        setup(props, { attrs, emit, slots }) {
            const store = useStore()
            const state = reactive({
                class: ['${ComponentName}-component']
            })
            
            return { ...toRefs(state) }
        }
    })
    </script>
    `
}
/*

return () => h('div', {
                ...toRefs(state),
            }, slots.default!())
            */
