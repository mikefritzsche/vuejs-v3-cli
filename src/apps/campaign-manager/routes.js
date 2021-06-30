import MainNav from '@/components/MainNav.vue'
import TogglerNav from '@/components/TogglerNav.vue'

const mainParentComponents = {
  default: () => import(
    /* webpackChunkName: 'campaign-manager' */
    './CampaignManager.vue'
    ),
  'sidebar-nav': MainNav,
  'toggler-nav': TogglerNav
}
export default {
  path: '/:acctId(\\d+)/campaign-manager/',
  name: 'campaign-manager',
	mainNav: true,
	mainNavText: 'Campaign Manager',
	redirect: () => ({name: 'some-redirect'}),
	meta: {
    app: 'campaign-manager',
    bodyClasses: ['main', 'campaign-manager'],
    default: true,
    pageHead: 'campaign manager',
    title: 'campaign manager'
  },
  components: mainParentComponents,
  children: []
}
