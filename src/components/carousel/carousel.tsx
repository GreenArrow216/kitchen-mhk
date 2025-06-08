import { useState, useEffect, type ReactNode } from "react";
import { useSwipeable } from "react-swipeable";
import LeftChevron from "../../assets/svg/Left-Chevron.svg";
import RightChevron from "../../assets/svg/Right-Chevron.svg";
import "./carousel.scss";

interface CarouselProps {
  children: ReactNode[];
  interval?: number;
  from: "hero" | "testimonial";
}

const Carousel = ({ children, interval = 1000000, from }: CarouselProps) => {
  const [current, setCurrent] = useState<number>(0);
  const length = children.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, interval);
    return () => clearInterval(autoSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div className={`carousel ${from}`} {...swipeHandlers}>
      {from === "testimonial" && (
        <button
          className="icon-btn"
          onClick={() => setCurrent((prev) => (prev - 1 + length) % length)}
        >
          <img src={LeftChevron} alt={"left-chevron.svg"} />
        </button>
      )}

      <div className="carousel-viewport">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children.map((child, i) => (
            <div className="carousel-slide" key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {from === "testimonial" && (
        <button
          className="icon-btn"
          onClick={() => setCurrent((prev) => (prev + 1) % length)}
        >
          <img src={RightChevron} alt={"right-chevron.svg"} />
        </button>
      )}

      {from === "hero" && (
        <div className="page-indicator">
          {children.map((_, index) => (
            <span
              key={index}
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
