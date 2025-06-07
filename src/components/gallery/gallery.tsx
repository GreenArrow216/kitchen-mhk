import Gallery1 from "../../assets/images/Gallery-1.png";
import Gallery2 from "../../assets/images/Gallery-2.png";
import Gallery3 from "../../assets/images/Gallery-3.png";
import Gallery4 from "../../assets/images/Gallery-4.png";

import "./gallery.scss"

const images = [
  { src: Gallery1, alt: "Gallery-1.png" },
  { src: Gallery2, alt: "Gallery-2.png" },
  { src: Gallery3, alt: "Gallery-3.png" },
  { src: Gallery4, alt: "Gallery-4.png" },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h3>Customer Gallery</h3>
      <div className="images flex-center">
        <div className="group-1 flex-center">
          {images.slice(0, 2).map((image, i) => (
            <div key={i} className="gallery-image ">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="group-2 flex-center">
          {images.slice(2).map((image, i) => (
            <div key={i + 2} className="gallery-image">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
