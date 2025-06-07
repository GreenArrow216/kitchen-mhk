import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/twitter";
import Logo from "../../assets/svg/logo.svg";
import Cart from "../../assets/images/shopping-cart.png";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
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
        <img src={Cart} alt={"cart.png"} />
      </button>
    </div>
  );
};

export default Header;
