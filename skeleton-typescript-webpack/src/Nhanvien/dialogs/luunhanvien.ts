

import { inject } from 'aurelia-framework';
import { nhanvien } from "../models/nhanvien";
import { DialogController } from "aurelia-dialog";
import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
@inject(DialogController, ValidationControllerFactory)

export class SaveNhanVien {
  validationcontroller: ValidationController;
  constructor(private dialogcontroller: DialogController, private controllerFactory) {
    this.validationcontroller = controllerFactory.createForCurrentScope();
    // this.validationcontroller.addRenderer(new BootstrapFormRenderer());
  }
  get getTieuDe() {
    switch (this.selectedItem.MaNv) {
      case 0:
        return "Thêm mới nhân viên";

      default:
        return "Cập nhật nhân viên";
    }
  }
  selectedItem: nhanvien;
  activate(dto: nhanvien) {
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
