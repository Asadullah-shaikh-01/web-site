import AboutCompanyDetails from "@/components/AboutCompanyDetails";
import AboutForm from "@/components/AboutForm";
import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import WhyChooseSection from "@/components/WhyChooseSection";
import React from "react";

const About_us = () => {
  return (
    <>
      <AboutHero />
      <AboutCompanyDetails />
      <WhyChooseSection />
      <AboutForm />
      <Footer />
    </>
  );
};

export default About_us;
