import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

export default function XuatChieu({ lichChieuShort }) {
  let xuatChieuDau = lichChieuShort[0].ngayChieuGioChieu;
  let maLichChieu = lichChieuShort[0].maLich;
  return (
    <div className="flex justify-start items-start gap-3 md:gap-5 mb-5 pr-3 pt-5">
      <NavLink to={`/purchase/${maLichChieu}`} className="no-underline">
        <div className="w-full h-10 leading-10 text-center bg-white text-[#04ab4d] hover:!bg-[#04ab4d] hover:text-white cursor-pointer rounded shadow">
          {moment(xuatChieuDau).format("l")}
          <span className="text-black">&rarr;</span>
          <span className="text-red-500">
            {moment(xuatChieuDau).format("LT")}
          </span>
        </div>
      </NavLink>
    </div>
  );
}
