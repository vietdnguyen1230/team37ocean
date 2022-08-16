import React from "react";
import Categories from "../components/Home/Categories";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Section from "../components/Home/Section";
import Team from "../components/Home/Team";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Section />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
