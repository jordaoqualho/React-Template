import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";

const Menu = () => {
  return (
    <header className="flex_center_row">
      <div className="logo">
        Test.io
      </div>
      <div className="menu_list">
        <ul className="flex_center_row">
          <a href>
            <li>Home</li>
          </a>
          <a href>
            <li>About</li>
          </a>
          <a href>
            <li>Prices</li>
          </a>
          <a href>
            <li>Contact</li>
          </a>
          <a href>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
