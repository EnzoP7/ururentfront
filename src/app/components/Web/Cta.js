"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const Cta = () => {
  return (
    <section
      className="pt-24 md:pt-0 xl:pt-48 section flex items-end bg-[#b2b7c2]/10 overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="md:max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Llega a tu destino ideal con nosotros, explorando cada rincón de
                Uruguay.
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                "Ya sea un viaje corto o una aventura larga, estamos aquí para
                acompañarte en cada kilómetro.Brindamos la mejor atención y el
                servicio de alquiler de vehículos más destacado en todo el país.
                Con nuestra experiencia y dedicación, garantizamos que tu viaje
                será cómodo y sin preocupaciones."
              </motion.p>
            </div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image
              src={"/images/cta/ParaTesisMapaUrurent.svg"}
              className="md:w-[500px] md:h-[320px] xl:w-[820px] xl:h-[840px]"
              width={820}
              height={840}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
