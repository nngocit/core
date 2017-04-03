export class nhanvien {
    public MaNv: number;
    HoTen: String;
    ChucVu: String;
    Email: String;
    RoleId: String;
    LatestLogin:string;
    constructor(nhanVien: any = { MaNv: 0 }) {
        this.MaNv = nhanVien.MaNv;
        this.ChucVu = nhanVien.ChucVu;
        this.Email = nhanVien.Email;
        this.HoTen = nhanVien.HoTen;
        this.RoleId=nhanVien.RoleId;
        this.LatestLogin=nhanVien.LatestLogin;
    }
}