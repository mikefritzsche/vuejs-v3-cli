module.exports = function(appName, appRoutePath, classes, defaultComponent, mainNav, pageHead, routeDefault, title, redirectPath) {
  const redirectContent = redirectPath ? `redirect: () => ({name: '${redirectPath}'}),` : ''
  const bodyClasses = `['main', '${classes.split(',')}']`
  const mainNavSection = mainNav ? `mainNav: true,\n\tmainNavText: 'Campaign Manager',` : ''

  let exportSection = `export default {
  path: '/:acctId(\\\\d+)/${appRoutePath}/',
  name: '${appName}',`

  exportSection = mainNav ? `${exportSection}\n\t${mainNavSection}` : exportSection
  exportSection = redirectContent ? `${exportSection}\n\t${redirectContent}\n\t` : `${exportSection}\n\t`

  exportSection += `meta: {
    app: '${appName}',
    bodyClasses: ${bodyClasses},
    default: ${routeDefault},
    pageHead: '${pageHead}',
    title: '${title}'
  },
  components: mainParentComponents,
  children: []
}`
  return `import MainNav from '@/components/MainNav.vue'
import TogglerNav from '@/components/TogglerNav.vue'

const mainParentComponents = {
  default: () => import(
    /* webpackChunkName: '${appName}' */
    './${defaultComponent}'
    ),
  'sidebar-nav': MainNav,
  'toggler-nav': TogglerNav
}
${exportSection}`
}
