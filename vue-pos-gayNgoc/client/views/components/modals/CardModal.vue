<template>
  <card-modal :visible="visible" @close="close" @ok="ok" @cancel="cancel" :title="title" :okText="okText" :cancelText="cancelText" transition="zoom">
    <div class="content">
     <div class="columns">
      <div class="column is-2 has-text-centered">
        <span class="icon is-large">
          <i class="fa fa-check-square-o"/>
        </span>
      </div>
      <div class="column">
        <div class="print-bill"> 

         <h2>370.000 đồng</h2>
         
         <p>Ghi chú đơn hàng</p>
          <table>
          <thead>
            <tr>
              <th>Sản phẩm  (12) </th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cà phê sữa (x2)</td>
              <td>32000đ</td>
            </tr>
            <tr>
              <td>Thuốc lá (x3)</td>
              <td>52000đ</td>
            </tr>
            <tr>
              <td>Trái dừa (x2)</td>
              <td>72000đ</td>
            </tr>
            <tr>
             <td>Cà phê đá (x2)</td>
              <td>12000đ</td>
            </tr>
            <tr>
             <td>Sting dâu (x2)</td>
              <td>9700đ</td>
            </tr>
          </tbody>
        </table>

        </div>
      </div>
    
    </div>
      
      
      </div>
    <!--<a @click="open(url)">Vue Admin on GitHub</a>-->
  </card-modal>


</template>

<script>
import { CardModal } from 'vue-bulma-modal'

export default {
  components: {
    CardModal
  },

  props: {
    visible: Boolean,
    title: String,
    url: String,
    cancelText: String,
    okText: String
  },

  data () {
    return {
      src: require('assets/logo.svg')
      
    }
  },

  methods: {
    open (url) {
      window.open(url)
    },

    close () {
      this.$emit('close')
    },
    ok () {
      this.$emit('ok');

      window.print();

      console.log("print");
    },

    cancel () {
      this.$emit('cancel');
    }
  }
}
</script>
