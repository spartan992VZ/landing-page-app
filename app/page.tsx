import Navbar from "./Landing/Navbar";
import Hero from "./Landing/Hero";
import Features from "./Landing/Features";
import UserTypes from "./Landing/UserTypes";
import Screenshots from "./Landing/Screenshots";
import CTA from "./components/CTA";
import Footer from "./Landing/Footer";
import Why from "./Landing/Why";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <Why />
      <Features />
      <UserTypes />
      <Screenshots /> 
      <CTA />
      <Footer />
    </>
  );
}