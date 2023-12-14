import { https } from "./config";

export let userServ = {
  postInfo: (taiKhoan) => {
    return https.post(
      `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    );
  },
  getList: () => {
    return https.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00");
  },
  postSignin: (values) => {
    return https.post("/QuanLyNguoiDung/DangNhap", values);
  },
  postRegister: (values) => {
    return https.post("/QuanLyNguoiDung/DangKy", values);
  },
  deleteAcount: (taiKhoan) => {
    return https.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  },
};

export let filmServ = {
  getListBanner: () => {
    return https.get("/QuanLyPhim/LayDanhSachBanner");
  },
  getListFilm: () => {
    return https.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"); //?maNhom=GP09&tenPhim=TH%C3%80NH
  },
  getListFilmPage: () => {
    return https.get("/QuanLyPhim/LayDanhSachPhimPhanTrang"); //?maNhom=GP01&tenPhim=Th%C3%A0nh&soTrang=1&soPhanTuTrenTrang=10
  },
  getListFlimDay: () => {
    return https.get("/QuanLyPhim/LayDanhSachPhimTheoNgay"); //?maNhom=GP01&tenPhim=th%C3%A0nh&soTrang=1&soPhanTuTrenTrang=10&tuNgay=12&denNgay=13
  },
  getInfoFilm: (id) => {
    return https.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
};

export let theaterServ = {
  getInfoTheater: () => {
    return https.get("/QuanLyRap/LayThongTinHeThongRap"); //?maHeThongRap=BHDStar
  },
  getInfoTheaterGroup: () => {
    return https.get("/QuanLyRap/LayThongTinCumRapTheoHeThong"); //?maHeThongRap=BHDStar
  },
  getInfoShowTimeTheater: () => {
    return https.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"); //?maHeThongRap=BHDStar&maNhom=GP01
  },
  getInfoShowTimeFilmTheater: (maPhim) => {
    return https.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  },
};

export let bookTicketsServ = {
  getListRoomTicket: (id) => {
    return https.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
  },
};
