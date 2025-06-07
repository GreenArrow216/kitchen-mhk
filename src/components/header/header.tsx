import { useState } from "react";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/twitter";
import Logo from "../../assets/svg/logo.svg";
import MenuModal from "../menuModal/menuModal";

import Hamburger from "../../assets/svg/menu.svg";

import "./header.scss";
import Cart from "../icons/Cart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="mobile-nav">
        <img
          className="hamburger"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          src={Hamburger}
          alt={"menu.svg"}
        />
        <a href="#" className="logo-link">
          <img src={Logo} alt={"logo.svg"} />
        </a>
        <button className="outline">
          <Cart/>
        </button>
      </div>
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="desktop-nav">
        <div className="icons">
          <Facebook size={16} />
          <Twitter size={16} />
          <Instagram size={16} />
        </div>
        <div className="left-nav">
          <a href="#">SHOP</a>
          <a href="#">PLAN MY KITCHEN</a>
        </div>
        <a href="#" className="logo-link">
          <img src={Logo} alt={"logo.svg"} />
        </a>
        <div className="right-nav">
          <a href="#">ABOUT US</a>
          <a href="#">GALLERY</a>
        </div>
        <button className="outline">
          MY ORDER
          <Cart/>
        </button>
      </div>
    </div>
  );
};

export default Header;