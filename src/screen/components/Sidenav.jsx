import React from "react";

export default function Sidenav() {
  return (
    <div className="bg-light sidebar">
      <div className="owner">
        {/* logo div with background image */}
        <div className="profile my-4 mx-2"></div>
      </div>
      <div className="links">
        <a
          href=""
          style={{ borderRadius: "10px" }}
          className="text-dark bg-white p-2 px-3 d-flex align-items-center justify-content-center "
        >
          {" "}
          <div className="bi bi-house-fill"></div>
        </a>
        <a href="">
          {" "}
          <div className="bi bi-book-fill"></div>{" "}
        </a>
        <a href="">
          {" "}
          <div className="bi bi-bar-chart-fill"></div>{" "}
        </a>
      </div>

      <div className="links">
        <a href="">
          {" "}
          <div className="bi bi-bell-fill"></div>
        </a>
        <a href="">
          {" "}
          <div className="bi bi-folder-fill"></div>{" "}
        </a>
        <a href="">
          {" "}
          <div className="bi bi-person-fill"></div>{" "}
        </a>
      </div>
    </div>
  );
}
