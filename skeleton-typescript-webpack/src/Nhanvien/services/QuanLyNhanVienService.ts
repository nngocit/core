import { QuanLyNhanVienInterface } from './QuanLyNhanVienInterface';
import { nhanvien } from "../models/nhanvien";
export class QuanLyNhanVienService implements QuanLyNhanVienInterface
{
        GetByUId() {
            throw new Error('Method not implemented.');
        }

        DeleteNhanVien(maNv: number): Promise<boolean> {
            throw new Error('Method not implemented.');
        }
        DeleteNhanViens(maNvs: number[]): Promise<boolean> {
            throw new Error('Method not implemented.');
        }

        PutNhanVien(nhanVien: nhanvien): Promise<boolean> {
            throw new Error('Method not implemented.');
        }

        PostNhanVien(nhanVien: nhanvien): Promise<nhanvien> {
            throw new Error('Method not implemented.');
        }

        GetNhanViens(): Promise<nhanvien[]> {
            throw new Error('Method not implemented.');
        }
        GetNhanVien(maNv: number): Promise<nhanvien> {
        throw new Error('Method not implemented.');
    }


}