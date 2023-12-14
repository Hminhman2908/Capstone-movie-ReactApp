import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => {
    return state.spinnerSlice;
  });
  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
      }}
    >
      <PacmanLoader size={150} color="#36d7b7" speedMultiplier={2} />
    </div>
  ) : (
    <div></div>
  );
}
