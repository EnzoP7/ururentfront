import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

const ElCarInfo = ({ car }) => {
  console.log({ car });
  const {
    type,
    name,
    price,
    starts,
    image,
    info,
    pasajeros,
    puertas,
    motor,
    baul,
    combustible,
    rendimiento,
    direccion,
    radio,
    aire_Acondicionado,
  } = car;

  console.log(
    type,
    name,
    price,
    starts,
    image,
    info,
    pasajeros,
    puertas,
    motor,
    baul,
    combustible,
    rendimiento,
    direccion,
    radio,
    aire_Acondicionado
  );
  return (
    <>
      <Header />
      <section className="h-screen mx-auto px-10">
        <div className="pt-[180px] ">
          <h3 className="h3 font-bold">
            {name} {type} O Similar
          </h3>
        </div>

        <div className="flex  gap-32">
          <div>
            <Image
              className="rounded-lg"
              src={image}
              width={750}
              height={500}
              alt="Imagen Auto"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h3 className="uppercase text-2xl ">DESCRIPCIÓN DEL VEHÍCULO</h3>
              <h3 className="uppercase pt-3">Precio por dia U$D {price}</h3>
              <ul className="gap-3">
                <li>Pasajeros: {pasajeros}</li>
                <li>Puertas: {puertas}</li>
                <li>Baúl: {baul}</li>
                <li>Motor: {motor}</li>
                <li>Combustible: {combustible}</li>
                <li>Rendimiento: {rendimiento}</li>
                <li>Dirección: {direccion}</li>
                <li>Radio: {radio}</li>
                <li>Aire Acondicionado: {aire_Acondicionado}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ElCarInfo;
