import React, { useEffect, useState } from "react";
import {
  // NavLink,
  // useNavigate,
  useParams,
} from "react-router-dom";
import "./DetailMovie.scss";
import moment from "moment";
import { ConfigProvider, Tabs, Tooltip } from "antd";
import XuatChieu from "./XuatChieu.js";
import { theaterServ } from "../../api/api.js";

const onChange = (key) => {
  console.log("Key :", key);
};

export default function DetailMovie() {
  const [detail, setDetail] = useState([]);
  let params = useParams();

  useEffect(() => {
    theaterServ
      .getInfoShowTimeFilmTheater(params.id)
      .then((res) => {
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const renderXuatChieu = (lichChieu) => {
    let lichChieuRemake = lichChieu.sort(
      (a, b) =>
        moment(a.ngayChieuGioChieu).valueOf() -
        moment(b.ngayChieuGioChieu).valueOf()
    );

    const mapping = lichChieuRemake.map((gioChieu) => {
      return moment(gioChieu.ngayChieuGioChieu).format("DD/MM/YYYY");
    });

    const uniqueNgayChieu = [...new Set(mapping)];

    // let listNgay = []
    let lichChieuShort = [];
    for (var i in uniqueNgayChieu) {
      let filter = lichChieuRemake.filter(
        (xuatChieu) =>
          moment(xuatChieu.ngayChieuGioChieu).format("DD/MM/YYYY") ===
          uniqueNgayChieu[i]
      );

      let listGio = filter.map((xuatChieu) =>
        moment(xuatChieu.ngayChieuGioChieu).format("HH:mm")
      );

      const uniqueGioChieu = [...new Set(listGio)];

      let listGioMaLich = filter.map(({ maLichChieu, ngayChieuGioChieu }) => ({
        maLich: maLichChieu,
        gio: moment(ngayChieuGioChieu).format("HH:mm"),
        ngayChieuGioChieu,
      }));

      // make unique listGioMaLich[] by gioChieu
      let uniqueGioMaLich = [];

      for (var i in listGioMaLich) {
        let { gio } = listGioMaLich[i];
        for (var g in uniqueGioChieu) {
          if (uniqueGioChieu[g] === gio) {
            uniqueGioMaLich.push(listGioMaLich[i]);
            break;
          }
        }
      }

      lichChieuShort.push(uniqueGioMaLich);
    }

    return lichChieuShort.map((item, index) => {
      return <XuatChieu key={`xuatChieu_${index}`} lichChieuShort={item} />;
    });
  };

  const renderRap = (cumRap, isFixedHeight) => {
    return cumRap.map((rap, index) => {
      let tenCumRap = rap.tenCumRap;
      let diaChi = rap.diaChi;

      return {
        key: `rap_${index}`,
        label: (
          <div
            className="text-left w-96
          "
          >
            <p className="text-green-800 font-medium">{tenCumRap}</p>
            <Tooltip title={diaChi.toUpperCase()} placement="topLeft">
              <p className="truncate">{diaChi}</p>
            </Tooltip>
          </div>
        ),
        children: (
          <div className={`${isFixedHeight ? "h-[500px]" : ""} overflow-auto`}>
            {renderXuatChieu(rap.lichChieuPhim)}
          </div>
        ),
      };
    });
  };

  const renderHeThongRap = () => {
    return detail.heThongRapChieu?.map((item, index) => {
      return {
        key: index,
        label: (
          <Tooltip title={item.tenHeThongRap.toUpperCase()} placement="bottom">
            <img src={item.logo} alt="" className="w-16 m-5" />
          </Tooltip>
        ),
        children: (
          <>
            <Tabs
              tabPosition="left"
              defaultActiveKey="1"
              style={{
                height: 500,
              }}
              items={renderRap(item.cumRapChieu, true)}
            />

            {/* <Collapse
              defaultActiveKey={["1"]}
              items={renderRap(item.cumRapChieu, false)}
            /> */}
          </>
        ),
      };
    });
  };

  return (
    <>
      <div className="container myDetail text-white">
        <div className="flex align-center justify-evenly flex-1">
          <div>
            <img
              src={detail.hinhAnh}
              className="w-[360px] h-[567px] object-cover"
              alt=""
            />
          </div>
          <div className="w-full ml-10">
            <div className="product--view col-md-8 col-sm-8">
              <div className="product--name">
                <h3 className="uppercase font-bold">{detail.tenPhim}</h3>
              </div>
              <div className="film--detail leading-7 text-blue-gray-400 mt-[18px]">
                {detail.moTa}
              </div>
              <ul className="film--info pt-[23px] pb-[18px]">
                <li>
                  <span className="col-left">Phân Loại</span>

                  <span className="col-right phan-loai">
                    T13 - PHIM DÀNH CHO KHÁN GIẢ TỪ 13 TUỔI TRỞ LÊN
                  </span>
                </li>

                <li>
                  <span className="col-left">Khởi Chiếu</span>

                  <span className="col-right">
                    {moment(detail.ngayKhoiChieu).format("DD/MM/YYYY")}
                  </span>
                </li>

                <li>
                  <span className="col-left">Đạo diễn</span>

                  <span className="col-right">Christopher Nolan</span>
                </li>

                <li>
                  <span className="col-left">Diễn viên</span>

                  <span className="col-right">
                    Christian Bale, Heath Ledger
                  </span>
                </li>

                <li>
                  <span className="col-left">Thể loại</span>

                  <span className="col-right">Action</span>
                </li>

                <li>
                  <span className="col-left">Khởi chiếu</span>

                  <span className="col-right">2023-10-18</span>
                </li>

                <li>
                  <span className="col-left">Thời lượng</span>

                  <span className="col-right">152 phút</span>
                </li>

                <li>
                  <span className="col-left">Ngôn ngữ</span>

                  <span className="col-right">Phim có phụ đề</span>
                </li>
              </ul>
              <div className="flex justify-start items-center">
                <a
                  className="mr-3 no-underline bg-[#45ab3c] hover:bg-[#4fc145] text-white font-semibold py-2 px-4 border border-[#45ab3c] rounded shadow"
                  href={detail.trailer}
                >
                  <i className="fa fa-video mr-1"></i>XEM TRAILER
                </a>

                <a
                  className="no-underline bg-[#45ab3c] hover:bg-[#4fc145] text-white font-semibold py-2 px-4 border border-[#45ab3c] rounded shadow"
                  href="#mua_ve"
                >
                  <i className="fas fa-ticket-alt mr-1"></i>MUA VÉ NGAY
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemColor: "#8C9BB4",
                  itemActiveColor: "white",
                  itemHoverColor: "white",
                  itemSelectedColor: "white",
                  inkBarColor: "#04ab4d",
                  titleFontSize: 24,
                  cardPadding: 10,
                  horizontalItemGutter: 50,
                  margin: 16,
                },
              },
            }}
          >
            <Tabs
              defaultActiveKey="1"
              tabPosition="left"
              onChange={onChange}
              className="shadow rounded border-2 border-white mt-10 mb-10"
              items={renderHeThongRap()}
            />
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}
