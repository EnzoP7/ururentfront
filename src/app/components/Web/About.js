"use client";

import Image from "next/image";

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/frenteuru.webp"}
              width={600}
              height={448}
            />
          </motion.div>
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                ¿Quienes Somos?
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                URURENT es una empresa nacional con más de 15 años en el rubro
                alquiler de autos sin chófer, nuestra sede se encuentra en la
                ciudad de Carmelo en el departamento de Colonia. Nuestro
                servicio abarca todo el territorio uruguayo, garantizando la
                calidad del mismo en cualquier punto del País. De esta forma
                usted podrá disfrutar de vehículos de última generación con la
                seguridad y tranquilidad que se merece.
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={300} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Vehículos
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={5} duration={6} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Sucursales
                  </div>
                </div>

                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Talleres
                  </div>
                </div>

                <motion.button
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase
                 font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
                >
                  See all cars
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
