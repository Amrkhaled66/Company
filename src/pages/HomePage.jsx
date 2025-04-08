import OurFeatures from "src/sections/HomePage/OurFeatures";
import HeroSection from "src/sections/HomePage/HeroSection";
import ItSolutions from "src/sections/HomePage/ItSolutions";
import OurService from "src/sections/HomePage/OurService";
import CompanyPromo from "src/sections/HomePage/CompanyPromo";
import Projects from "src/sections/HomePage/Projects";
import Team from "src/sections/HomePage/Team";
import Reviews from "src/sections/HomePage/Reviews";
import Blogs from "src/sections/HomePage/Blogs";
import Pricing from "src/sections/HomePage/Pricing";
import CTA from "src/sections/HomePage/CTA";

import useUpdatePageTitle from "src/hooks/useUpdatePageTitle";

const HomePage = () => {
  useUpdatePageTitle("Main");
  return (
    <>
      <HeroSection />
      <OurFeatures />
      <ItSolutions />
      <OurService />
      <CompanyPromo />
      <Projects />
      <Team />
      <Reviews />
      <Blogs />
      <Pricing />
      <CTA />
    </>
  );
};

export default HomePage;
