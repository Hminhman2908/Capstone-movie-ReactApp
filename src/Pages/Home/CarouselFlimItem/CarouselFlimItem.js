import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CarouselFlimItem.scss";

// import required modules
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { filmServ } from "../../../api/api";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

const ListMovie = () => {
  const [movieSapChieu, setMovieSapChieu] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    filmServ
      .getListFilm()
      .then((res) => {
        const listFilm = res.data.content;
        const flimSapChieu = listFilm.filter(
          ({ sapChieu }) => sapChieu === true
        );
        setMovieSapChieu(flimSapChieu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container !mt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movieSapChieu.map(({ hinhAnh, maPhim, moTa, trailer }, index) => {
          return (
            <SwiperSlide key={index} className="mb-10">
              <div className="group">
                <img src={hinhAnh} className="relative" alt="" />
                <div className="hidden group-hover:block absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.6)]">
                  <p className="text-white text-justify overflow-hidden whitespace-pre-wrap h-52">
                    {moTa}
                  </p>
                  <span
                    className="transition delay-150 duration-200 border border-red-500 hover:border-red-700 rounded-lg cursor-pointer py-3 w-[8rem] bg-red-500 hover:bg-red-700 text-white absolute left-2 bottom-2"
                    onClick={handleShow}
                  >
                    <i className="fa fa-video mr-1"></i>Xem Trailer
                  </span>

                  <Modal
                    className="fade modal-show modal-lg modal show"
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    centered
                  >
                    <div className="video-selling">
                      <ReactPlayer
                        url={trailer}
                        width="100%"
                        height="auto"
                        playing={true}
                        controls={true}
                      />
                    </div>
                  </Modal>

                  <span className="transition delay-150 duration-200 border border-red-500 hover:border-red-700 rounded-lg cursor-pointer py-3 w-[8rem] bg-red-500 hover:bg-red-700 text-white absolute right-2 bottom-2">
                    <NavLink
                      to={`/movie/${maPhim}`}
                      className="text-white no-underline"
                    >
                      <i className="fas fa-ticket-alt mr-1"></i>Đặt vé
                    </NavLink>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default ListMovie;
