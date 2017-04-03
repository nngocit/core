import lazyLoading from './lazyLoading'

export default {
  name: 'Đơn hàng',
  path: '/receipt',
  meta: {
    icon: 'fa-sticky-note',
    expanded: false,
    link: 'receipt/index.vue'
  },
  component: lazyLoading('receipt', true)
}
