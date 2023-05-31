import React from "react";
import blackboy from "../assets/images/blackboy.png";
import Sides from "./Sides";

export default function Main() {
  return (
    <div className="main">
      <br />
      <br />
      {/* first section */}
      {/* profile */}
      <div className="mainprofile mx-2 p-3 ">
        <img
          src={blackboy}
          alt="Author"
          style={{ height: "100px", borderRadius: "50px" }}
          className="p-1 mx-2"
        />
        <div>
          <h4 className="d-flex fw-bold align-items-center">
            Ademola Adurah{" "}
            <span className="mx-2 p-2 fw-bold rounded-4 bg-info text-dark bi-star-fill px-3 small">
              {" "}
              Author ai
            </span>
          </h4>
          <br />
          <p className="d-flex">
            <div className="small rounded-4 px-4 border p-1 text-dark">
              #Romance
            </div>
            <div className="small rounded-4 px-4 border p-1 text-dark mx-2">
              #Mystery
            </div>
          </p>
        </div>
      </div>

      {/* section two */}
      <div className="d-flex">
        <div className="col-lg-7 p-4 bg-light" contentEditable="true" style={{outline:'none'}} >What story or drama do you want me to help you with?...</div>
        <div className="col-lg-5 p-4 text-white bg-dark">Novel statistics</div>
      </div>
      <Sides />
    </div>
  );
}
