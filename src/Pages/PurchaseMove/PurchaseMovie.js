import React, { useEffect, useState } from "react";
import { bookTicketsServ } from "../../api/api";
import { useParams } from "react-router-dom";

export default function PurchaseMovie() {
  const [purchase, setPurchase] = useState([]);
  let params = useParams();
  useEffect(() => {
    bookTicketsServ
      .getListRoomTicket(params.id)
      .then((res) => {
        console.log(res);
        setPurchase(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="list-Seat col-span-2">
          <div className="container">
            {purchase.danhSachGhe?.map((item, index) => {
              return (
                <button
                  className="w-[35px] m-3 p-2 bg-blue-gray-400 hover:bg-blue-gray-100 text-white"
                  key={index}
                >
                  {item.tenGhe}
                </button>
              );
            })}
          </div>
        </div>
        <div className="info-film"></div>
      </div>
    </div>
  );
}
