import lazyLoading from './lazyLoading'

export default {
  name: 'Bán hàng',
  path: '/pos',
  meta: {
    icon: 'fa-shopping-bag',
    expanded: false,
    link: 'pos/index.vue'
  },
  component: lazyLoading('pos', true)
}
