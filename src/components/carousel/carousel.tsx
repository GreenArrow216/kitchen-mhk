import "./carousel.scss"

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="content">
        <p>DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY</p>
        <h1>Bespoke & made to measure handmade kitchen design</h1>
        <button className="lg">ORDER NOW</button>
      </div>
      <div className="page-indicator">
        <span className="active"/>
        <span/>
        <span/>
      </div>
    </div>
  );
};

export default Carousel;
