import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { filmServ } from "../../../api/api";

export default function CarouselItem() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    filmServ
      .getListBanner()
      .then((res) => {
        setBanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: "linear",
  };
  return (
    <Carousel autoplay {...settings}>
      {banner.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={item.hinhAnh}
              alt=""
              className="w-full h-[800px] object-cover object-fit"
            />
          </div>
        );
      })}
    </Carousel>
  );
}
