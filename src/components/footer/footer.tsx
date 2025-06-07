import type { ReactNode } from "react";
import Logo from "../../assets/svg/logo.svg";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/twitter";
import Instagram from "../icons/Instagram";

import "./footer.scss";

const RoundedIcon = ({ icon }: { icon: ReactNode }) => {
  return <div className="rounded-icon">{icon}</div>;
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">
        <div className="horizontal-line" />
        <img src={Logo} alt={"logo.svg"} />
        <div className="horizontal-line" />
      </div>
      <div className="footer-links">
        <div className="column">
          <h4>About</h4>
          <a href="#">SHOP</a>
          <a href="#">PLAN MY KITCHEN</a>
          <a href="#">ABOUT US</a>
          <a href="#">GALLERY</a>
        </div>
        <div className="column">
          <h4>Service</h4>
          <a href="#">FAQ</a>
          <a href="#">CONTACT</a>
          <a href="#">HOW TO BUY</a>
          <a href="#">DOWNLOADS</a>
        </div>
        <div className="column">
          <h4>Info</h4>
          <a href="#">DELIVERY</a>
          <a href="#">TERMS</a>
          <a href="#">PRIVACY</a>
        </div>
        <div className="column">
          <h4>Follow</h4>
          <div className="icons">
            <RoundedIcon icon={<Facebook color="black" />} />
            <RoundedIcon icon={<Twitter color="black" />} />
            <RoundedIcon icon={<Instagram color="black" />} />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved.</p>
        <p>Responsive website design, Development & Hosting by mtc.</p>
      </div>
      <div className="horizontal-line" />
    </div>
  );
};

export default Footer;

// About
// Shop Plan My Kitchen About Us Gallery
// service
// FAQ Contact How to Buy Downloads
// info
// Delivery Terms Privacy
// followa
