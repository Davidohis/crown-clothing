import React from "react";
import Directory from "../../comonents/directory/directory.component";
import Header from "../../comonents/Home/header/header.component";
import "./homepage.styles.scss";

const HomePage = () => (
  <div>
   <Header />
   <div className="homepage">
      <Directory />
   </div>
  </div>
);

export default HomePage;
