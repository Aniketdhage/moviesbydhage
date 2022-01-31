import React from "react";
import { useLocation } from "react-router";
import { NavList, LinkStyled } from "./nav.styled";

const LINKS = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/starred",
    text: "Starred",
  },
  {
    to: "/about",
    text: "About Us",
  },
];

const Navs = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map((item, index) => (
          <li key={index}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? "active" : ""}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
