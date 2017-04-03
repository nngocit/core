
import { inject } from 'aurelia-framework';
import { notes } from '../models/notes'
import { DialogController } from "aurelia-dialog";
import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
@inject(DialogController, ValidationControllerFactory)

export class savenote {
  validationcontroller: ValidationController;
  constructor(private dialogcontroller: DialogController, private controllerFactory) {
    this.validationcontroller = controllerFactory.createForCurrentScope();
  }
  get getTieuDe() {
    switch (this.selectedItem.Detail) {
      case "":
        return "Thêm mới";

      default:
        return "Cập nhật";
    }
  }
  selectedItem: notes;
  activate(dto: notes) {
    console.log('selectedItem',JSON.stringify(dto));
    this.selectedItem = dto;
  }
  save() {
    this.validationcontroller.validate().then((result) => {
      if (result.valid) {
        this.dialogcontroller.ok(this.selectedItem);
      }
    })
  }

}
