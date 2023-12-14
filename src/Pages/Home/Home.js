import React from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import CarouselFlimItem from "./CarouselFlimItem/CarouselFlimItem";
import TabsMovie from "./TabsMovie/TabsMovie";

export default function Home() {
  return (
    <div className="homePage">
      <CarouselItem />
      <>
        <h1 className="text-center text-danger animate-bounce mt-10">
          Phim Sắp Công Chiếu
        </h1>
        <CarouselFlimItem />
      </>
      <>
        <h1 className="text-center text-green-400 animate-pulse mt-10">
          Phim Đang Công Chiếu
        </h1>
        <TabsMovie />
      </>
    </div>
  );
}
