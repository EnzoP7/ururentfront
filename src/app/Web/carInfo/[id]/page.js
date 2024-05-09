"use client";
import React from "react";
import { losCars } from "@/app/components/Web/CarSlider";
import Header from "@/app/components/Web/Header";
import Footer from "@/app/components/Web/Footer";
import ElCarInfo from "@/app/components/Web/ElCarInfo";

const buscarVehiculo = (id) => {
  try {
    const auto = losCars.find((car) => car.id == parseInt(id));
    return auto;
  } catch (error) {
    console.log(error);
  }
};

export default function CarInfopage({ params }) {
  const { id } = params;

  const car = buscarVehiculo(id);

  return (
    <>
      <ElCarInfo car={car} />
    </>
  );
}
