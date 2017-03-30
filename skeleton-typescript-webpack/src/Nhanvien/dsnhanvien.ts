import * as firebase from 'firebase';
import * as _ from 'lodash';
import { GridOptions, GridApi, ColumnApi } from "ag-grid";
import { inject } from "aurelia-dependency-injection";
import { QuanLyNhanVienInterface } from "./services/QuanLyNhanVienInterface";
import { QuanLyNhanVienPrototype } from "./services/QuanLyNhanVienPrototype";
import { nhanvien } from "./models/nhanvien";
import { SaveNhanVien } from './dialogs/luunhanvien';
import { DialogService } from 'aurelia-dialog';
import swal from 'sweetalert2';
@inject(QuanLyNhanVienPrototype,DialogService)
export class dsnhanvien {
   
   
    private gridOptions: GridOptions;
  private showGrid: boolean;
  private rowData: any[];
  private listOfCountries: any[];
  private rowCount: string;
  private api: GridApi;
  private columnApi: ColumnApi;
  private listItem: any;
  private selectedItem:any;
  private columnDefs: any[];

  private selectdRows: nhanvien[] = [];
    
constructor(private quanLyNhanVienService: QuanLyNhanVienInterface,private dialogService){
  
this.columnDefs = [
      {
        headerName: "Chọn",
        width: 30,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },{
headerName: "STT",
        width: 70,
        cellRenderer: function(params) {
            return Number(params.node.id) + 1;
        }},
      {
        headerName: "Mã", field: "MaNv", filter: 'number'
      },
      { headerName: "Chức vụ", field: "ChucVu" },
      { headerName: "Họ tên", field: "HoTen", filter: 'text', filterParams: { apply: true, newRowsAction: 'keep' }},
      { headerName: "Email", field: "Email", filter: 'text', filterParams: { newRowsAction: 'keep' } },
      { headerName: "Role", field: "RoleId" ,  cellRenderer: (params) => {
                    return this.FormatRole(params);
                }},
      {
        headerName: "Hành động",
        suppressMenu: true,
        suppressSorting: true,
        template:
        `<button type="button" class="btn btn-default btn-xs" data-action-type="edit">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Detail
        </button>
      <button type="button" class="btn btn-default btn-xs" data-action-type="delete">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Del
        </button>
        `
      }
    ];
    this.gridOptions = {
   
    floatingFilter:true,
      enableSorting: true,
      enableFilter: true,
      enableColResize: true,
      paginationPageSize: 20,
      columnDefs: this.columnDefs,
      rowModelType: 'pagination',
      rowSelection: 'multiple',
      animateRows: true,
  
    };
}
 activate() {
      return this.quanLyNhanVienService.GetNhanViens().then((res) => {
       this.listItem = res;
       console.log('aa',this.quanLyNhanVienService.GetByUId());
    })
}
FormatRole(params) {
 
     if (params.column.colId === 'RoleId') {
        if(params.value==1){
            return params.value='Administator';
        }
         if(params.value==2){
            return params.value='Mod';
        }
         if(params.value==3){
            return params.value='User';
        }
        }
     
    }
onReady() {
    this.createNewDatasource();
   
  }
    createNewDatasource() {
    if (!this.listItem) {

      return;
    }
    
    var dataSource = {
      getRows: (params) => {
      this.quanLyNhanVienService.GetNhanViens().then(res => {
          this.listItem = res;
          var rowsThisPage = this.listItem.slice(params.startRow, params.endRow);
          var lastRow = -1;
          if (this.listItem.length <= params.endRow) {
            lastRow = this.listItem.length;
          }
    
          params.successCallback(rowsThisPage, lastRow);
        })
      },
      rowCount: this.listItem.length
    };

      (this as any).gridOptions.api.setDatasource(dataSource);

  }
   public onRowClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "edit":
         return this.onActionEditClick(data);
      

      }
    }
  }
    deleteSelected() {
    let maNvs = this.selectdRows.map(x => x.MaNv);
    swal({
  title: 'Bạn muốn xóa',
  text: this.selectdRows.map(x=>x.HoTen) as any,
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: false
},).then( () =>{
  console.log(maNvs);
           this.quanLyNhanVienService.DeleteNhanViens(maNvs)
            .then(res => {
              swal("Thành công", "Xóa thành công", "success");
              this.selectdRows = [];
              this.onReady();
            }).catch((err) => {

              swal("Không thành công", `${err}`, "error")
            });
},  (dismiss)=> {
  // dismiss can be 'cancel', 'overlay',
  // 'close', and 'timer'
  if (dismiss === 'cancel') {
     swal("Đã hủy", "đã hủy thao tác", "error");
  }
})
  

  }
   themMoiNhanVien() {
            
    this.dialogService.open({ viewModel: SaveNhanVien, model: new nhanvien() }).then((result) => {
      if (!result.wasCancelled) {
   
          let selectedItem:nhanvien = result.output;
        this.quanLyNhanVienService.PostNhanVien(selectedItem )
          .then((res) => {
             console.log( result.output);
  
            swal("Thành công", "Lưu thành công", "success");
            this.onReady();
          }).catch((err) => {

            swal("Không thành công", `${err}`, "error")
          });
      } else {
      
      }
    });
  }
  
   public onActionEditClick(data: nhanvien) {
    this.dialogService.open({ viewModel: SaveNhanVien, model: new nhanvien(data) }).then((result) => {
      if (!result.wasCancelled) {
     
        this.selectedItem = result.output;
        console.log( result.output);
        this.quanLyNhanVienService.PutNhanVien(this.selectedItem).then((res) => {
          swal("Thành công", "Lưu thành công", "success");
          this.onReady();
        }).catch((err) => {

          swal("Không thành công", `${err}`, "error")
        });
      } else {
      
      }
    });
  }
  //event
   onRowSelected(e) {
    this.selectdRows =  (this as any).gridOptions.api.getSelectedRows().map(x => new nhanvien(x));
    console.log(JSON.stringify(this.selectdRows));
  }
   onRowDoubleClicked(e) {
    let nhanVien = new nhanvien(e.data);
    (this as any).onActionEditClick(nhanVien);
  }
  public onActionViewClick(data: nhanvien) {
    console.log('',data);
  }
   
}