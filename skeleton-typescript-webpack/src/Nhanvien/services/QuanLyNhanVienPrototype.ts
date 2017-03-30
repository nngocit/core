import { QuanLyNhanVienInterface } from "./QuanLyNhanVienInterface";
import { nhanvien } from "../models/nhanvien";
import * as firebase from 'firebase';
import axios from "axios";
import * as _ from 'lodash';
export class QuanLyNhanVienPrototype implements QuanLyNhanVienInterface {
  private db = firebase.database();
  
  DeleteNhanVien(maNv: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let Nhanvien = this.db.ref('users');
      
      Nhanvien.child(maNv as any).remove().then(res => {
        resolve(res)
      })
        .catch(err => {
          reject(err)
        });
    })
  }
  DeleteNhanViens(maNvs: number[]): Promise<boolean> {
     let tasks: Promise<boolean>[];
    tasks = maNvs.map(x => this.DeleteNhanVien(x));
    return new Promise((resolve, reject) => {
      Promise.all(tasks).then(values => {
        let result = values.reduce((previusVal, currnetVal) => previusVal && currnetVal);
        resolve(result);
      })
        .catch(err => reject(err))
    })

  }

  PutNhanVien(nhanVien: nhanvien): Promise<boolean> {
  return new Promise((resolve, reject) => {
      this.db.ref('/users/' + nhanVien.MaNv).set(nhanVien, (error?) => {
        if (error) {
          reject(new Error('firebase errors'));
        }
      }).then((res) => {
        resolve(res);
      })
    })
  }

  PostNhanVien(nhanVien: nhanvien): Promise<nhanvien> {
     return new Promise((resolve, reject) => {
      this.GetNhanViens().then(res => {
        let maxMaNhanVien: number = _.maxBy(res, function (o) { return o['MaNv']; }).MaNv;
        nhanVien.MaNv = +maxMaNhanVien + 1;
        this.db.ref('/users/' + nhanVien.MaNv).set(nhanVien, (error?) => {
          if (error) {
            reject(new Error('firebase errors'));
          }
        }).then((res) => {
          resolve(res);
        })
      })

    })
  }

    
    GetNhanVien(maNv: number): Promise<nhanvien> {
        throw new Error('Method not implemented.');
    }

    GetNhanViens(): Promise<nhanvien[]> {
   return new Promise((resolve, reject) => {
      let nhanViens: nhanvien[] = [];
      this.db.ref('users').once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          let nhanVien = new nhanvien(_.assignIn({ MaNv: childKey }, childData));
          nhanViens.push(nhanVien);
          resolve(nhanViens);
        });
      }, err => reject(err));
    })
  }

  GetByUId(){
    // let swapRef = this.db.ref('users');
    // let Link = swapRef.toString() + '.json';
    // console.log('keyslink',Link);
    //  axios.get(Link).then((res)=> {
    //  let Keys = res.data;
    //   console.log(Keys);
    // });
// this.db.ref('users').orderByChild('MaNv').limitToFirst(1).on('child_added',
// (snap)=>{

// console.log('aa',(snap as any).val()); 
// });
// let users=[];
//  this.db.ref('users').orderByKey().limitToFirst(1).once('value').then((snap)=> {

//    (users as any).push(snap.val());
//   console.log(users);
//  });
// var users;
//     this.db.ref('users').orderByKey().limitToLast(1).on('value',function(snap){
//     users = snap.val();
//     console.log('aa',users);
//   });
// var users;
//   this.db.ref('users').orderByKey().limitToLast(1).on('value',function(snap){
//   users = snap.val();
//   console.log('aa',users);
//   });
  }
}
 