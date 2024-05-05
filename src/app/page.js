import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Condiciones from "./components/Condiciones";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <PreguntasFrecuentes />
      <div className="xl:hidden md:pt-0 md:mb-0 pt-40 mb-40">
        <Condiciones />
      </div>
      <div className="mt-40 xl:mt-0">
        <Why />
      </div>
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />

      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
