import React, { useEffect, useState } from "react";
import { ConfigProvider, Tabs } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { theaterServ } from "../../../api/api";
const TabsMovie = () => {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    theaterServ
      .getInfoShowTimeTheater()
      .then((res) => {
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderDsPhim = (dsPhim) => {
    const flimDangChieu = dsPhim.filter(({ dangChieu }) => dangChieu === true);
    return flimDangChieu.map((phim, index) => {
      return (
        <div key={index} className="relative flex space-x-5 p-5 items-center ">
          <div className="img-movie w-1/4">
            <img src={phim.hinhAnh} alt="" className="w-20 h-32 object-cover" />
          </div>
          <div className="content-movie w-3/4 flex flex-col flex-wrap gap-5 ">
            <div className="name-movie">
              <p className="text-3xl font-bold text-white text-left">
                {phim.tenPhim}
              </p>
            </div>
            <div className="container ">
              <div className="grid grid-cols-2 gap-5">
                {phim.lstLichChieuTheoPhim
                  .slice(0, 8)
                  .map(({ maLichChieu, ngayChieuGioChieu }, index) => {
                    return (
                      <NavLink
                        to={`/purchase/${maLichChieu}`}
                        key={index}
                        className="no-underline"
                      >
                        <div
                          className="w-full h-10 leading-10 text-center bg-white text-[#04ab4d] hover:!bg-[#04ab4d] hover:text-white cursor-pointer rounded shadow"
                          key={index}
                        >
                          {moment(ngayChieuGioChieu).format("l")}
                          <span className="text-black">&rarr;</span>
                          <span className="text-red-500">
                            {moment(ngayChieuGioChieu).format("LT")}
                          </span>
                        </div>
                      </NavLink>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-5 right-10 h-1 bg-white"></div>
        </div>
      );
    });
  };

  let renderHeThongRap = () => {
    return heThongRap.map((item, index) => {
      return {
        label: <img src={item.logo} alt="" className="w-16 m-5" />,
        key: index,
        children: (
          <Tabs
            style={{
              height: 900,
            }}
            tabPosition="left"
            items={item.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div
                    className="text-left w-96
                  "
                  >
                    <p className="text-green-800 font-medium">
                      {cumRap.tenCumRap}
                    </p>
                    <p className="truncate">{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div
                    style={{
                      height: 900,
                      overflow: "scroll",
                    }}
                  >
                    {renderDsPhim(cumRap.danhSachPhim)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };

  return (
    <div className="container" id="cum-rap">
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
          items={renderHeThongRap()}
          className="shadow rounded border-2 border-white mt-10 mb-10"
        />
      </ConfigProvider>
    </div>
  );
};
export default TabsMovie;
