<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-8">
        <article class="tile is-child box">
          <h1 class="title">Danh sách sản phẩm</h1>
          <tabs type="boxed">
            <tab-pane label="Tất cả">
  
              <div class="columns flexWrap">
  
                <div class="column is-3"
                     v-for="product in products"
                     v-on:click="onProductClick(product)">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img v-bind:src="'http://hockiquandoi.net/banhang/'+ product.image"
                             v-bind:alt="product.name">
                      </figure>
                    </div>
                    <div class="card-content"
                         style="padding: 3px 5px">
                      <div class="content">
                        <b>{{ product.name }}</b>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
  
            </tab-pane>

            <tab-pane label="Coffee">
  
              <div class="columns flexWrap">
  
                <div class="column is-3"
                     v-for="product in products"
                     v-on:click="onProductClick(product)">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img v-bind:src="'http://hockiquandoi.net/banhang/'+ product.image"
                             v-bind:alt="product.name">
                      </figure>
                    </div>
                    <div class="card-content"
                         style="padding: 3px 5px">
                      <div class="content">
                        <b>{{ product.name }}</b>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
  
            </tab-pane>


            <tab-pane label="Yaourts">
              <div class="columns flexWrap">
                <div class="column is-3"  v-for="product in products" v-if="product.category == 'yaourt'"  v-on:click="onProductClick(product)">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img v-bind:src="'http://hockiquandoi.net/banhang/'+ product.image"
                             v-bind:alt="product.name">
                      </figure>
                    </div>
                    <div class="card-content"
                         style="padding: 3px 5px">
                      <div class="content">
                        <b>{{ product.name }}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
            </tab-pane>
            <tab-pane label="Sinh tố">
              
                <div class="columns flexWrap">
                <div class="column is-3"  v-for="product in products" v-if="product.category == 'smoothies'"  v-on:click="onProductClick(product)">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img v-bind:src="'http://hockiquandoi.net/banhang/'+ product.image"
                             v-bind:alt="product.name">
                      </figure>
                    </div>
                    <div class="card-content"
                         style="padding: 3px 5px">
                      <div class="content">
                        <b>{{ product.name }}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </tab-pane>
            <tab-pane label="Soda - Siro">
              
              <div class="columns flexWrap">
                <div class="column is-3"  v-for="product in products" v-if="product.category == 'soda'"  v-on:click="onProductClick(product)">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img v-bind:src="'http://hockiquandoi.net/banhang/'+ product.image"
                             v-bind:alt="product.name">
                      </figure>
                    </div>
                    <div class="card-content"
                         style="padding: 3px 5px">
                      <div class="content">
                        <b>{{ product.name }}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </tab-pane>
            <tab-pane label="Trái cây">
              

              <div class="columns flexWrap">
                <div class="column is-3"  v-for="product in products" v-if="product.category == 'fruit'"  v-on:click="onProductClick(product)">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img v-bind:src="'http://hockiquandoi.net/banhang/'+ product.image"
                             v-bind:alt="product.name">
                      </figure>
                    </div>
                    <div class="card-content"
                         style="padding: 3px 5px">
                      <div class="content">
                        <b>{{ product.name }}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </tab-pane>
            <tab-pane label="Trà">
              
              <div class="columns flexWrap">
                <div class="column is-3"  v-for="product in products" v-if="product.category == 'tea'"  v-on:click="onProductClick(product)">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img v-bind:src="'http://hockiquandoi.net/banhang/'+ product.image"
                             v-bind:alt="product.name">
                      </figure>
                    </div>
                    <div class="card-content"
                         style="padding: 3px 5px">
                      <div class="content">
                        <b>{{ product.name }}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
  
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Thanh toán ({{totalCount}}) </h1>
          <article class="media"
                   v-for="item in receipt.receiptProducts">
            <figure class="media-left">
              <p class="image is-64x64">
                <img v-bind:src="'http://hockiquandoi.net/banhang/'+ item.product.image"
                     v-bind:alt="item.product.name">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{item.product.name}}</strong>
                  <br> {{item.product.price | formatMoney}} x
                  <input type="number"
                         class="inputNumber"
                         min="1"
                         v-model="item.numberOfProducts"> = <strong> {{item.numberOfProducts * item.product.price}} đ</strong>
                  <br>
                  <small><a v-on:click="removeProductClick(item.product)">Xóa</a> <!--· <a >Sửa</a>--> </small>
                </p>
              </div>
            </div>
          </article>
          <article class="media"
                   v-if="receipt.receiptProducts.length">
            <figure class="media-left">
              Tổng cộng :
              <br>
            </figure>
            <div class="media-content">
              <div class="content">
                <h4><b>{{total | formatMoney}}</b> </h4>
              </div>
            </div>
          </article>
          <h4 class="has-text-centered"
              v-if="!receipt.receiptProducts.length">Chưa có sản phẩm nào </h4>
          <article class="media"
                   v-if="receipt.receiptProducts.length">
            <figure class="media-left">
              Ghi chú
              <br> (nếu có)
            </figure>
            <div class="media-content">
              <p class="control">
                <textarea class="textarea"
                          placeholder="Ghi chú đơn hàng"
                          rows="2"
                          style="min-height: 70px"
                          v-model="receipt.note"></textarea>
              </p>
              <p class="control">
                <a class="button is-large is-success"
                   @click="openModalReceipt()">
                  <!--<a class="button is-large is-success" v-on:click="addReceipt(receipt)" >-->
                  <span class="icon is-small">
                                  <i class="fa fa-check"></i>
                                </span>
                  <span>Hoàn tất</span>
                </a>
              </p>
            </div>
          </article>
        </article>
      </div>
    </div>
    <div id="section-to-print">
      <div class="has-text-centered">
        <img src="~assets/logo-header-1.png"
             width="120" />
  
        <div class="address">Số 1, đường 3, KDC Vĩnh Lộc,
          <br/> P. Bình Hưng Hòa B, Q. Bình Tân, TP HCM.</div>
        <div class="phoneNumber">Hotline: (08) 5425 3064</div>
  
      </div>
      <div class="name">HÓA ĐƠN THANH TOÁN</div>
      <table class="table">
        <tbody>
          <tr>
            <td>
              <ul class="list">
                <li>- Số HĐ : 1152</li>
                <li>- Ngày tạo : 11:46am - 12/3/2017</li>
              </ul>
            </td>
          </tr>
          <!--<tr>
                      <td>
                        <div class="note">Ghi chú đơn hàng</div>
                      </td>
                    </tr>-->
        </tbody>
      </table>
      <table class="receipt table">
        <thead>
          <tr>
            <th>Tên </th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in receipt.receiptProducts">
            <td>{{item.product.name}} (x{{item.numberOfProducts}})</td>
            <td class="noWrap">{{item.numberOfProducts * item.product.price | formatMoney}}</td>
          </tr>
  
          <td>
            <div class="total has-text-right">Tổng cộng : </div>
          </td>
          <td>
            <div class="total noWrap">
              <span>
                        {{total | formatMoney}}
                        </span>
            </div>
          </td>
          </tr>
        </tbody>
      </table>
      <div class="thanks">
        <p>Pass wifi: <b>trungtamsyc</b> </p>
        Cám ơn và hẹn gặp lại quý khách
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import Modal from '../components/modals/Modal'

import modalReciept from './component/modalReciept'

import Firebase from 'firebase'

import Notification from 'vue-bulma-notification'

import { Tabs, TabPane } from 'vue-bulma-tabs'




const modalRecieptComponent = Vue.extend(modalReciept)


const NotificationComponent = Vue.extend(Notification)

const openNotification = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 4500,
  container: '.notifications'
}) => {
  return new NotificationComponent({
    el: document.createElement('div'),
    propsData
  })
}

var eventHub = new Vue()


let config = {
  apiKey: "xxx",
  authDomain: "xxx.firebaseapp.com",
  databaseURL: "", //Vo doi nghe ku
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xx"
}

let firebaseApp = Firebase.initializeApp(config);
let database = firebaseApp.database();

let productsRef = database.ref('products');

let receiptsRef = database.ref('receipts');


const openModalReciept = (propsData = {
  visible: true
}) => {
  return new modalRecieptComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Tabs,
    TabPane
  },

  firebase: {
    products: productsRef
  },

  data() {
    return {
      message: "Roger Federer",

      edit: true,
      date: '',

      // ListProduct: {},


      receipt: {
        receiptProducts: [

        ],
        note: '',
        total: '',
        totalCount: '',

      }

    }
  },
  computed: {
    total: function () {
      var total = 0;

      this.receipt.receiptProducts.forEach(function (item) {
        total += item.product.price * item.numberOfProducts;
      });
      this.receipt.total = total;
      return total;
    },
    totalCount: function () {
      var totalCount = 0;

      this.receipt.receiptProducts.forEach(function (item) {
        var x = parseFloat(item.numberOfProducts)

        if (x < 0 || isNaN(x)) {
          totalCount += 0;
          openNotification({
            message: 'Lỗi số lượng sản phẩm',
            type: 'warning',
            duration: 2000
          })
        } else {
          totalCount += x;
        }

      });


      this.receipt.totalCount = totalCount;
      return totalCount;
    }

  },

  filters: {
    formatMoney: function (value) {
      if (!value) return '';
      var a = parseInt(value);
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
    }
  },

  mounted: function () {
    // this.fetchEvents();
  },

  methods: {

    // fetchEvents: function () {
    //   this.$http.get('~assets/products.json').then(function (response) {
    //     this.ListProduct = response.body[0]
    //   }, function (response) {
    //     // error callback
    //   })

    // },


    resetReceipt() {
      this.receipt.receiptProducts = [];
      this.receipt.note = '';
      this.receipt.total = '';
      this.receipt.totalCount = '';
      this.receipt.date = ''
    },


    openModalReceipt() {

      var check = true;

      this.receipt.receiptProducts.forEach(function (item) {
        var x = parseFloat(item.numberOfProducts)
        console.log(x);
        if (x <= 0 || isNaN(x)) {

          openNotification({
            message: 'Lỗi số lượng sản phẩm',
            type: 'warning',
            duration: 2000
          });
          check = false;
          return;
        }
      });

      if (check) {
        const receiptModal = this.receiptModal || (this.receiptModal = openModalReciept({
          title: 'Xác nhận đơn hàng',
          okText: 'Tạo và in hóa đơn',
          cancelText: 'Tạo',
          show: false,
          url: this.$store.state.pkg.homepage,
          receipt: this.receipt,
          addReceipt: this.addReceipt
        }))
        receiptModal.$children[0].active()

        receiptModal.$children[0].$on('ok', this.resetReceipt)
        receiptModal.$children[0].$on('cancel', this.resetReceipt)
      }




    },

    onProductClick(product) {

      var found = false;
      for (var i = 0; i < this.receipt.receiptProducts.length; i++) {
        if (this.receipt.receiptProducts[i].product === product) {
          this.receipt.receiptProducts[i].numberOfProducts++;
          found = true;
          break;
        }
      }

      if (!found) {
        this.receipt.receiptProducts.push({
          product: product,
          numberOfProducts: 1
        });
      }


    },



    removeProductClick(product) {

      for (var i = 0; i < this.receipt.receiptProducts.length; i++) {
        if (this.receipt.receiptProducts[i].product === product) {
          this.receipt.receiptProducts.splice(i, 1);
          break;
        }
      }
    },



    addReceipt(receipt) {

      let productToPush = this.receipt.receiptProducts.map(x => {
        let product = x;
        delete product.product['.key'];

        return product;
      });
      receipt.receiptProducts = productToPush;
      var now = new Date();
      var jsonDate = now.toJSON();

      receipt.date = jsonDate;
      receiptsRef.push(receipt);

      openNotification({
        message: 'Thêm hóa đơn thành công',
        type: 'success',
        duration: 5000
      })
    }



  }
}

</script>



<style >
.button {
  margin: 5px 0 0;
}

.flexWrap {
  display: -webkit-flex;
  /* Safari */
  -webkit-flex-wrap: wrap;
  /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
}

.modal-card-foot {
  justify-content: flex-end;
}

#section-to-print {
  padding: 0px 20px 10px;
  display: none;
}

@media print and (color) {
  * {}
}

@media print {
  .modal,
  .hero,
  .menu,
  .level.app-levelbar,
  .tile.is-ancestor,
  .footer {
    display: none !important;
  }
  .table {
    margin-bottom: 0;
  }
  * {
    color: black !important;
  }
  #section-to-print {
    display: block;
  }
  .app-main {
    padding-top: 0;
    margin-left: 0;
  }
  .app-content {
    padding: 0;
  }
  h1 {
    color: #000;
    background: none;
  }
  body,
  article {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  nav,
  aside {
    display: none;
  }
  @page {
    /*margin: 1cm;*/
  }
  .noWrap {
    white-space: nowrap;
  }
  .address {
    font-size: 12px;
  }
  .phoneNumber {
    font-size: 14px;
  }
}

#section-to-print .name {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 20px;
}

#section-to-print .list {
  font-size: 12px;
  margin-bottom: 10px;
  font-style: italic;
}

#section-to-print .note {
  font-size: 12px;
  margin-bottom: 10px;
}

#section-to-print .receipt {
  margin-bottom: 10px;
  border-top: 1px dashed gray;
  border-bottom: 1px dashed gray;
}

#section-to-print .total {
  font-size: 14px;
}

#section-to-print .total span {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

#section-to-print .thanks {
  font-size: 13px;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 20px;
}

.vue-bulma-tabs .card {
  cursor: pointer;
}

.inputNumber {
  border-radius: 3px;
  width: 37px;
  outline: none;
  box-shadow: none;
  border: none;
  background: #f1f1f1;
  text-align: center;
}

.tabs {
  margin: 0 0 20px 0;
}

.vue-bulma-tabs .tab-content {
  margin: 0 0 20px 0 !important;
  padding: 3px;
}
</style>
