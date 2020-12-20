import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3>
          *Please note that the data for this page is only for the US and is
          from the NYT data set
        </h3>
      </div>
    </>
  );
};

export default Footer;
