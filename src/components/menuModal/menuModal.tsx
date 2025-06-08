import { useEffect, useState } from "react";
import "./menuModal.scss";
import CloseBtn from "../../assets/svg/x.svg";

type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuModal = ({ isOpen, onClose }:MenuModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div className="menu-modal">
      <div className="overlay" onClick={onClose}></div>
      <div className={`modal-content ${isOpen ? "slide-in" : "slide-out"}`}>
        <img
          className="close"
          onClick={onClose}
          src={CloseBtn}
          alt={"close-modal-button"}
        />
        <nav>
          <a href="#">SHOP</a>
          <a href="#">PLAN MY KITCHEN</a>
          <a href="#">ABOUT US</a>
          <a href="#">GALLERY</a>
        </nav>
      </div>
    </div>
  );
};

export default MenuModal;
