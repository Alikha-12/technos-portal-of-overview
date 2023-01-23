import Extracurriculars from "./components/extracurricular";
import { BiAccessibility } from "react-icons/bi";
import { FcCustomerSupport } from "react-icons/fc";
import Hero from "./components/Hero";
import HeroSecond from "./components/HeroSecond";

function AcademicsPage() {
  return (
    <div>
      <Hero />
      <HeroSecond />
      <Extracurriculars />
    </div>
  );
}
export default AcademicsPage;
