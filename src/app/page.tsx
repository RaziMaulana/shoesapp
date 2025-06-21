import Navbar from "../../components/navbar";
import Hero from "../../components/heroSection";
import Product from "../../components/productSection";
import Partner from "../../components/partnerSection";
import Testimonial from "../../components/testimonialSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Partner />
      <Testimonial />
    </div>
  );
}
