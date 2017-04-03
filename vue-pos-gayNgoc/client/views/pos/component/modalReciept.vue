<template>
  <card-modal  :visible="visible" @close="close" @ok="ok" @cancel="cancel" :title="title" :okText="okText" :cancelText="cancelText"  transition="zoom">
    <div class="content">
     <div class="columns">
      <div class="column is-2 has-text-centered">
        <span class="icon is-large">
          <i class="fa fa-check-square-o"/>
        </span>
      </div>
      <div class="column">

        <h3 v-if="!receipt.receiptProducts.length">Tạo đơn hàng thành công ^^</h3>
      

        <div class="print-bill" v-if="receipt.receiptProducts.length"> 

         <h2> {{receipt.total | formatMoney}}</h2>
         
         <p>{{receipt.note}}</p>
          <table>
          <thead>
            <tr>
              <th>Sản phẩm  ({{this.receipt.totalCount}}) </th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>

            <tr  v-for="item in receipt.receiptProducts">
              <td>{{item.product.name}} (x{{item.numberOfProducts}})</td>
              <td>{{item.numberOfProducts * item.product.price | formatMoney}}</td>
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

  props: ['visible','title', 'url', 'cancelText', 'okText', 'receipt', 'addReceipt'],

  data () {
    return {
    }
  },

  filters: {
      formatMoney: function(value){
          if (!value) return '';
          var a = parseInt(value);
          return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
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
      
      if(this.receipt.receiptProducts.length){
        this.addReceipt(this.receipt);

        document.getElementsByClassName('modal-card-foot')[0].style.display = "none";

      } else{
         document.getElementsByClassName('modal-card-foot')[0].style.display = "block";
         
      }

    },

    cancel () {
      this.$emit('cancel');
      if(this.receipt.receiptProducts.length){
        this.addReceipt(this.receipt);

        document.getElementsByClassName('modal-card-foot')[0].style.display = "none";

      } else{
         document.getElementsByClassName('modal-card-foot')[0].style.display = "block";
         
      }
    }
  }
}
</script>

<style >

.modal-card-foot{
  /*display: none;*/
}
</style>