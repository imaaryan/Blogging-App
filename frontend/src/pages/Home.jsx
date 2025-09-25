import React from "react";
import HeroSection from "../sections/Home/HeroSection";
import { BlogsTab } from "../sections/Home/BlogsTab";
import ContactForm from "../sections/Home/ContactForm";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BlogsTab />
      <ContactForm />
    </>
  );
};

export default Home;
