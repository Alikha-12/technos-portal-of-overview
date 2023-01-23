import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
function Home() {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <Benefits />
      <WhyUs />
      <Footer />
    </div>
  );
}
export default Home;
