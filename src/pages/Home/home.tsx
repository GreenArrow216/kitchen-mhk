import Bisect from "./_components/bisect/bisect";
import Gallery from "./_components/gallery/gallery";
import "../../styles/common.scss";
import HeroCarousel from "./_components/heroCarousel/heroCarousel";
import Testimonial from "./_components/testimonial/testimonial";

const Home = () => {
  return (
    <div className="home">
      <HeroCarousel />
      <Bisect />
      <Testimonial />
      <Gallery />
    </div>
  );
};

export default Home;
