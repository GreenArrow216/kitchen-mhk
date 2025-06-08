import Carousel from "../../../../components/carousel/carousel";
import "./testimonial.scss";
import "./testimonial.scss";

type TestimonialType = {
  testimonial: string;
  author: string;
};

const TESTIMONIALS: TestimonialType[] = [
  {
    testimonial:
      "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
    author: "Jane, Dundee",
  },
  {
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "John, Doe",
  },
  {
    testimonial:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    author: "Queen, Oliver",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-wrapper">
      <p className="orange-p">WHAT OUR CUSTOMERS SAY</p>
      <h3>Over 35 years experience designing handmade kitchens</h3>
      <Carousel from="testimonial">
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-slide" key={i}>
            <p className="description">{t.testimonial}</p>
            <p className="author">{t.author}</p>
          </div>
        ))}
      </Carousel>

      <button className="lg">FREQUENTLY ASKED QUESTIONS</button>
    </div>
  );
};

export default Testimonial;
