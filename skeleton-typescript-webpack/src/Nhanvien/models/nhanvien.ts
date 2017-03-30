export class nhanvien {
    public MaNv: number;
    HoTen: String;
    ChucVu: String;
    Email: String;
    RoleId: String;
    constructor(nhanVien: any = { MaNv: 0 }) {
        this.MaNv = nhanVien.MaNv;
        this.ChucVu = nhanVien.ChucVu;
        this.Email = nhanVien.Email;
        this.HoTen = nhanVien.HoTen;
        this.RoleId=nhanVien.RoleId;
    }
}