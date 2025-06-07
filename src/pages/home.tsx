import Bisect from "../components/bisect/bisect";
import HeroCarousel from "../components/heroCarousel/heroCarousel";
import Gallery from "../components/gallery/gallery";
import Testimonial from "../components/testimonial/testimonial";
import "../styles/common.scss"

const Home = () => {
  return (
    <div>
     <HeroCarousel/>
     <Bisect/>
     <Testimonial/>
     <Gallery/>
    </div>
  );
};

export default Home;
