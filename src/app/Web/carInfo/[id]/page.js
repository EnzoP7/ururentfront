"use client";
import React from "react";

import ElCarInfo from "../../../components/Web/ElCarInfo";
import losCars from "../../../components/GetData/losCars";

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
