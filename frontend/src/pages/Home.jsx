import React from "react";
import HeroSection from "../sections/Home/HeroSection";
import { BlogsList } from "../sections/Home/BlogsTab";
import ContactForm from "../sections/Home/ContactForm";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BlogsList />
      <ContactForm />
    </>
  );
};

export default Home;
