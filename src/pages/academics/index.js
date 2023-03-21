import Extracurriculars from "./components/extracurricular";
import { BiAccessibility } from "react-icons/bi";
import { FcCustomerSupport } from "react-icons/fc";
import Hero from "./components/Hero";
import HeroSecond from "./components/HeroSecond";
import Belower from "./components/Belower";
import Organization from "./components/Organization";
import Another from "./components/Another";

function AcademicsPage() {
  return (
    <div>
      <Hero />
      <HeroSecond />
      <Extracurriculars />
      <Belower />
    </div>
  );
}
export default AcademicsPage;
