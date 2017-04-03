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
                (notess as any).push(snap.val());
                 resolve(notess);
                console.log(JSON.stringify(notess));
            });
        })

    }
}