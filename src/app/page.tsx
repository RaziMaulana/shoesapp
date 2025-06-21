import Navbar from "../../components/navbar";
import Hero from "../../components/heroSection";
import Product from "../../components/productSection";
import Partner from "../../components/partnerSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Partner />
    </div>
  );
}
