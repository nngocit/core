import { notes } from '../models/notes'
import { notelinksInterface } from '../services/notelinksInterface'
import * as firebase from 'firebase';
import axios from "axios";
import * as _ from 'lodash';
export class notelinksService implements notelinksInterface {
    private db = firebase.database();


    Gets() {
        let notess: notes[] = [];
        return new Promise((resolve, reject) => {
            this.db.ref('notes').once('value').then((snap) => {
                snap.forEach(function (scn) {
                    var childKey = scn.key;
                    var childData = scn.val();
                    let nhanVien = new notes(_.assignIn({ MaNv: childKey }, childData));
                    console.log('cky', childKey, 'val', scn.val())
                    notess.push(nhanVien);
                    resolve(notess);
                });
            });
        })
    }
    postMessage(notes : notes)
    {
      console.log(JSON.stringify(notes))
         return new Promise((resolve, reject) => {
        this.db.ref('notes').push(notes, (error) => {
          if (error) {
            reject(new Error('firebase errors'));
          }
        }).then((res) => {
          resolve(res);
        })
         })
    }
  
}