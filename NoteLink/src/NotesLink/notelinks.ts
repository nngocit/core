import { inject } from "aurelia-dependency-injection";
import { notelinksService } from './services/notelinksService';
import {notes } from './models/notes';
import { DialogService } from 'aurelia-dialog';
import swal from 'sweetalert2';
import { savenote } from './dialogs/savenote';
@inject(notelinksService,DialogService)
export class notelinks {
     selectedItem: notes;
    constructor(private noteservice: notelinksService,private dialogService) {

    }
    activate() {
        this.Check();

    }
    Check() {
        return this.noteservice.Gets().then((res) => {
            console.log('aa', res);
        })
    }
    savenote()
    {
       this.dialogService.open({ viewModel: savenote, model: new notes() }).then((result) => {
      if (!result.wasCancelled) {
   
          let selectedItem:notes = result.output;
        this.noteservice.postMessage(selectedItem )
          .then((res) => {
             console.log( result.output);
  
            swal("Thành công", "Lưu thành công", "success");
            //this.onReady();
          }).catch((err) => {

            swal("Không thành công", `${err}`, "error")
          });
      } else {
      
      }
    });
    }
}
