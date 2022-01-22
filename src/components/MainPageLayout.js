import React from "react";
import Navs from "./Navs";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="MOVIES SHOP"
        subtitle="Are you looking for Movie or an Actor ?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
