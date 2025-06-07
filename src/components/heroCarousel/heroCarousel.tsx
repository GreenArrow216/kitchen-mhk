// import "./heroCarousel.scss";

import Hero from "../../assets/images/Hero.png";
import Gallery2 from "../../assets/Gallery-2@2x.png";
import Gallery3 from "../../assets/Gallery-3@2x.png";
import Carousel from "../carousel/carousel";

const CAROUSEL_CONTENTS = [
  {
    img: Hero,
    p: "DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY",
    h1: "Bespoke & made to measure handmade kitchen design",
    button: "ORDER NOW",
  },
  {
    img: Gallery3,
    p: "WANT TO KNOW MORE ABOUT US",
    h1: "World grade seamless fittings and services",
    button: "ABOUT US",
  },
  {
    img: Gallery2,
    p: "WE ARE JUST A CLICK AWAY FROM YOU, CONTACT US",
    h1: "Happy to service anytime anyday",
    button: "CONTACT US",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel from={'hero'}>
    {CAROUSEL_CONTENTS.map((item, i) => (
      <div
        key={i}
        className="carousel-slide-content"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <div className="content">
          <p>{item.p}</p>
          <h1>{item.h1}</h1>
          <button className="lg">{item.button}</button>
        </div>
      </div>
    ))}
  </Carousel>
  );
};

export default HeroCarousel;
