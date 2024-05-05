"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

const Why = () => {
  return (
    <section className="section flex items-center " id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Excelencia inigualable y satisfacción del cliente.
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Nuestra dedicación a brindar servicios excepcionales nos distingue de
          la competencia. Desde el momento en que usted interactúa con nosotros,
          nos esforzamos por Superar sus expectativas en cada interacción.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex justify-center mb-6 xl:mb-2"
        >
          <Image
            src={"/images/why/vento.webp"}
            width={1060}
            height={420}
            alt=""
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px] xl:pb-5"
        >
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="xl:h3 text-2xl font-bold">
              Alquile de manera facil y rapida
            </h3>
            <p className="hidden xl:flex">
              Nuestros servicios se destacan por su rapidez y flexibilidad,
              permitiendo a nuestros clientes acceder de manera sencilla y veloz
              a una amplia gama de opciones que satisfacen sus necesidades.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="xl:h3 text-2xl font-bold">
              Vehiculos de Ultima Generación
            </h3>
            <p className="hidden xl:flex">
              En nuestra flota, contamos con vehículos de última generación
              equipados con tecnología avanzada que garantiza la seguridad y
              comodidad de nuestros clientes durante sus viajes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="xl:h3 text-2xl font-bold">
              Servicios rápidos y flexibles
            </h3>
            <p className="hidden xl:flex">
              Servicios rápidos y flexibles, además de una atención al cliente
              excepcional, asegurando así que cada experiencia de alquiler sea
              sin complicaciones y satisfactoria para nuestros clientes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
