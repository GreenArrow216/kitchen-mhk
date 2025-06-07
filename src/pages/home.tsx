import Facebook from "../components/icons/Facebook";
import Instagram from "../components/icons/Instagram";
import Twitter from "../components/icons/twitter";
import "../styles/common.scss"

const Home = () => {
  return (
    <>
      <h1>This is home page</h1> 
      <button>Test Button</button>
      <button className="primary-outline">Test Button</button>
      <button className="outline">Test Button</button>
      <Twitter/>
      <Facebook/>
      <Instagram/>
    </>
  );
};

export default Home;
