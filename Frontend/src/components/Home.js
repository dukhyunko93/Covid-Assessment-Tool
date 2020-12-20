import React from "react";
import Searchbar from "./Searchbar";

const Home = () => {
  return (
    <>
      <div className="content-container"
        styles={{
          dsplay: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="content" style={{alignSelf: "center"}}>
          <h1>CONTENT</h1>
          <Searchbar />
        </div>
      </div>
    </>
  );
};

export default Home;
