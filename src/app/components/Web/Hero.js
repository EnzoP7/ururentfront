"use client";

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../../context/search";
import Image from "next/image";

import { motion, easeInOut } from "framer-motion";

import { fadeIn } from "../../../../variants";

const Hero = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen  md:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-center xl:justify-start h-full">
          <div className="text-center md:max-w-2xl xl:max-w-xl md:text-left mt-16 md:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1 pt-3 md:pt-0"
            >
              Llegá a <span className="text-accent">Cualquier Parte</span> del
              País
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description   md:max-w-[550px] mx-auto md:mx-0 mb-6 md:mb-10"
            >
              Encuentre su vehículo ideal para cualquier aventura con nuestra
              gama de vehículos. Alquiler de coches accesibles y fiables.
            </motion.p>
            {/* <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
            </motion.div> */}
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vh] xl:max-w-[860px]
           xl:xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <div className=" xl:hidden">
              <Image
                src={"/images/hero/golsito.webp"}
                // fill
                width={600}
                height={600}
                className=""
                alt="Vehiculo"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="hidden  xl:flex">
              <Image
                src={"/images/hero/golsito.webp"}
                // fill
                width={800}
                height={800}
                className=""
                alt="Vehiculo"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div>
        {searchActive ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ ease: easeInOut }}
            className="fixed top-[80px] z-10 w-full max-w-[1920px]"
          >
            <Search />
          </motion.div>
        ) : (
          <div className="-mt-12 w-full max-w-[1300px] mx-auto">
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Search />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
