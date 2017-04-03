<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue JS</h1>
    </div>

  <div class="panel panel-default">
    <div class="panel-heading">
    <h5>Thêm</h5>
    </div>
    <div  class="panel-body">
    <form if="form" class="form-inline" v-on:submit.prevent="addBook">
    <div class="form-group">
    <label for="bookTitle">Title:</label>
    <input type="text" id="bookTitle" value="" class="form-control" v-model="newBook.title"></input>
    </div>
     <div class="form-group">
    <label for="bookAuthor">Author:</label>
    <input type="text" id="bookAuthor" value="" class="form-control" v-model="newBook.author"></input>
    </div>
     <div class="form-group">
    <label for="bookURL">URL:</label>
    <input type="text" id="bookURL" value="" class="form-control" v-model="newBook.url"></input>
    </div>
    <input type="submit" class="btn btn-primary" value="Thêm"></input>
    </form>
    </div>
    </div>


    <img src="./assets/logo.png">
    <div class="panel panel-default">
    <div class="panel-heading">
    <h5>Danh sách</h5>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Author</th>
          <th>title</th>
          <th>url</th>
   <th>Xoá</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" book in books">
          <td>
            <a v-bind:href="book.url">{{book.author}}</a>
          </td>
          <td>
            {{book.title}}
          </td>
          <td>
            {{book.url}}
          </td>
          <td>
           <span class="glyphicon glyphicon-trash" v-on:click="rmBook(book)"></span>
          </td>
        </tr>
  
      </tbody>
    </table>
    </div>
  
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Firebase from 'firebase'
  let config = {
  
    apiKey: "AIzaSyDd0DThtm4RpjGeSk51-h9Gw5lS8KgQ6EM",
    authDomain: "vuejs-4456b.firebaseapp.com",
    databaseURL: "https://vuejs-4456b.firebaseio.com",
    storageBucket: "vuejs-4456b.appspot.com",
    messagingSenderId: "626245802813"
  
  
  }
  let app = Firebase.initializeApp(config);
  let db = app.database();
  
  let booksRef = db.ref('books');
  console.log(JSON.stringify(booksRef));
  
  export default {
    name: 'app',
    firebase: {
      books: booksRef
    },
    data()
    {
      return{
        newBook:{
          title:'',
          author:'',
          url:''
        }
      }
    },
    methods:{
      addBook:function(){
        booksRef.push(this.newBook);
        this.newBook.title='';
        this.newBook.author='';
        this.newBook.url='';
      },
       rmBook:function(book){
      //  booksRef.child(book['.key']).remove();
      console.log(JSON.stringify(booksRef.child(book['.title'])));
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
