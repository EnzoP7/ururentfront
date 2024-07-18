"use client";
import React from "react";

import losCars from "../../../data/losCars";
import { InfoCar } from "../../../components/Web/InfoCar";

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
      {/* <InfoCar car={car} /> */}

      <InfoCar car={car} />
    </>
  );
}
