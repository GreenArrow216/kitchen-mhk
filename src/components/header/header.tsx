import { useEffect, useRef, useState } from "react";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/twitter";
import Logo from "../../assets/svg/logo.svg";
import MenuModal from "../menuModal/menuModal";
import Hamburger from "../../assets/svg/menu.svg";
import Cart from "../icons/Cart";

import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 100;

      if (shouldBeScrolled !== isScrolledRef.current) {
        isScrolledRef.current = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
        console.log("called", shouldBeScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
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
          <Cart />
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
          <Cart />
        </button>
      </div>
    </div>
  );
};

export default Header;
