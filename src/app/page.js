import dynamic from "next/dynamic";
import Header from "./components/Web/Header";
import Hero from "./components/Web/Hero";
import Cars from "./components/Web/Cars";
import About from "./components/Web/About";
// import Why from "./components/Web/Why";
// import Testimonial from "./components/Web/Testimonial";
// import Cta from "./components/Web/Cta";
import Footer from "./components/Web/Footer";
import BackToTopBtn from "./components/Web/BackToTopBtn";
// import PreguntasFrecuentes from "./components/Web/PreguntasFrecuentes";
// import Condiciones from "./components/Web/Condiciones";

const PreguntasFrecuentes = dynamic(
  () => import("./components/Web/PreguntasFrecuentes"),
  { ssr: false }
);
const Condiciones = dynamic(() => import("./components/Web/Condiciones"), {
  ssr: false,
});
const Why = dynamic(() => import("./components/Web/Why"), { ssr: false });
// const Testimonial = dynamic(() => import("./components/Web/Testimonial"), {
//   ssr: false,
// });
const Cta = dynamic(() => import("./components/Web/Cta"), { ssr: false });

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <PreguntasFrecuentes />
      <div className=" md:pt-0 md:mb-0 sm:pt-0 pt-40 mb-40">
        <Condiciones />
      </div>
      <div className="mt-40 xl:mt-0">
        <Why />
      </div>
      {/* <Testimonial /> */}
      <Cta />
      <Footer />
      <BackToTopBtn />

      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
