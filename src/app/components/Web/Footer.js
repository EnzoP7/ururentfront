"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

import Copyright from "./Copyright";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        <motion.div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-0">
            <Link href={"/"} className="cursor-pointer">
              <Image
                src={"/images/marca/logo.png"}
                width={200}
                height={200}
                alt="Logo Ururent"
              />
            </Link>
            {/* <div className="text-secondary">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
            </div> */}
            <div className="flex flex-col gap-y-4 font-semibold pt-5">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(+598) 98 542 542</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">Info@ururent.com.uy</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="h4 font-bold mb-8">Horarios</h3>
            <div className="flex flex-col gap-y-4 ">
              <div className="flex gap-x-2">
                <div className="text-secondary">Lun- Vie:</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sab:</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Dom:</div>
                <div className="font-semibold">11:00AM - 05:00PM</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h4 font-bold mb-8">Recibir Notificaciónes</h3>
            <div className="mb-9 text-secondary">
              "Mantente al tanto de promociones y noticias enviándonos tu
              dirección de correo electrónico."
            </div>
            <form className="flex gap-x-2 h-14">
              <button
                type="submit"
                className="btn btn-xl btn-accent w-full"
                onClick={() =>
                  (window.location.href =
                    "mailto:enzopontet2003@gmail.com?subject=Interesado en recibir notificaciones y noticias")
                }
              >
                Recibir Notificaciones
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
