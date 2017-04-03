import { nhanvien } from "../models/nhanvien";
export interface QuanLyNhanVienInterface
{
     GetNhanViens(): Promise<Array<nhanvien>>;
     GetNhanVien(maNv: number): Promise<nhanvien>;
     PostNhanVien(nhanVien: nhanvien): Promise<nhanvien>;
     PutNhanVien(nhanVien: nhanvien): Promise<boolean>;
     DeleteNhanVien(maNv: number): Promise<boolean>;
     DeleteNhanViens(maNvs: number[]): Promise<boolean>;
      GetByUId();
}
