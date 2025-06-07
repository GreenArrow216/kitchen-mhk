import Bisect from "../components/bisect/bisect";
import Carousel from "../components/carousel/carousel";
import Gallery from "../components/gallery/gallery";
import Testimonial from "../components/testimonial/testimonial";
import "../styles/common.scss"

const Home = () => {
  return (
    <div>
     <Carousel/>
     <Bisect/>
     <Testimonial/>
     <Gallery/>
    </div>
  );
};

export default Home;
