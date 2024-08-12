import React from "react";
import { notFound } from "next/navigation"; // Utiliza notFound para manejar datos no encontrados
import losCars from "../../../data/losCars";
import dynamic from "next/dynamic";

// Cargar InfoCar dinámicamente para reducir el tamaño del bundle inicial
const InfoCar = dynamic(() => import("../../../components/Web/InfoCar"));

// Buscar vehículo por ID
const buscarVehiculo = (id) => {
  const auto = losCars.find((car) => car.id === parseInt(id));
  return auto || null;
};

export async function generateStaticParams() {
  // Generar paths para cada coche
  return losCars.map((car) => ({
    id: car.id.toString(),
  }));
}

export default async function CarInfo({ params }) {
  const { id } = params;
  const car = buscarVehiculo(id);

  if (!car) {
    notFound(); // Mostrar una página de error 404 si no se encuentra el coche
  }

  return (
    <>
      <InfoCar car={car} />
    </>
  );
}
