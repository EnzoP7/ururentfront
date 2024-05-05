"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { fadeIn } from "../../../variants";
import Image from "next/image";
import { motion } from "framer-motion";

export const cars = [
  {
    type: "Sedan",
    name: "Volkswagen Gol",
    price: 29,
    starts: 5.0,
    image: "/images/cars/golsedan.jpeg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
  {
    type: "Hatch",
    name: "Volkswagen Gol",
    price: 29,
    starts: 5.0,
    image: "/images/cars/golhatch.jpeg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
  {
    type: "Pick Up",
    name: "Fiat Strada",
    price: 29,
    starts: 5.0,
    image: "/images/cars/strada.jpeg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
  {
    type: "Pick Up",
    name: "Volkswagen Saveiro",
    price: 25,
    starts: 5,
    image: "/images/cars/saveiro.jpeg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "2 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Pick Up",
    name: "Nissan Frontier",
    price: 35,
    starts: 4.7,
    image: "/images/cars/frontier.jpeg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "2400 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "X4",
      },
    ],
  },

  {
    type: "Pick Up",
    name: "Fiat Fiorino",
    price: 29,
    starts: 5.0,
    image: "/images/cars/fiorino.jpeg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "2 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1400 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
];

const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 15 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0  ">
                <Image src={car.image} width={380} height={284} alt="" />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      {car.price}/dia
                    </h3>
                  </div>
                  <div className="flex fap-x-2  text-accent h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>

                <button className="btn btn-accent btn-lg">Ver Detalles</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
