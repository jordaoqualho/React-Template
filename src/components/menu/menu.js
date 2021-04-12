import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Logo from "./img/Logo.png";

import "../../App.css";

const Menu = () => {
  return (
    <header className="flex_center_row">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu_list">
        <ul className="flex_center_row">
          <a href>
            <li>Home</li>
          </a>
          <a href>
            <li>Doces</li>
          </a>
          <a href>
            <li>Bolos</li>
          </a>
          <a href>
            <li>Salgados</li>
          </a>
          <a href>
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
