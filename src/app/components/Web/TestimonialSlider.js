"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";

import { fadeIn } from "../../../../variants";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonialData = [
  {
    message:
      "Alquilé un vehículo para un viaje de negocios y quedé impresionada con la rapidez y eficiencia del servicio. ¡Definitivamente volveré a utilizar sus servicios en el futuro!",
    avatar: "/images/testimonial/avatar.png",
    name: "María González",
    job: "Gerente de Ventas",
  },
  {
    message:
      "Necesitaba un auto para moverme durante mis vacaciones y la experiencia con esta empresa fue excelente. El proceso de alquiler fue fácil y rápido, y el personal fue muy amable y servicial",
    avatar: "/images/testimonial/avatar.png",
    name: "Carlos Rodríguez",
    job: "Estudiante Universitario",
  },
  {
    message:
      "Como freelance, a menudo necesito viajar para reuniones y eventos. Esta empresa ha sido mi elección número uno para alquilar vehículos debido a su conveniencia y precios competitivos. ¡Siempre los recomiendo a mis colegas!",
    avatar: "/images/testimonial/avatar.png",
    name: "Laura Martínez",
    job: "Freelancer",
  },
  {
    message:
      "He alquilado autos en varias ocasiones con esta empresa y nunca me han decepcionado. Su atención al cliente es excepcional y la calidad de los vehículos es de primera.",
    avatar: "/images/testimonial/avatar.png",
    name: "Roberto López,",
    job: "Viajero Frecuente",
  },
];

const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[650px] xl:h-[500px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center"
              >
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium ">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt=""
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlider;
