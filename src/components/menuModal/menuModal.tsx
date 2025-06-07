import "./menuModal.scss";
import CloseBtn from  "../../assets/svg/x.svg"

type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="menu-modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content">
        <img className="close" onClick={onClose} src={CloseBtn} alt={'close-modal-button'}/>
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
