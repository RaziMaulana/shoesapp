import Navbar from "../../components/navbar";
import Hero from "../../components/heroSection";
import Product from "../../components/productSection";
import Partner from "../../components/partnerSection";
import Testimonial from "../../components/testimonialSection";
import Closing from "../../components/closingSection";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Partner />
      <Testimonial />
      <Closing />
      <Footer />
    </div>
  );
}
