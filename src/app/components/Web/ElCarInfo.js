import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import SecondHeader from "./SecondHeader";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import InfoPersonal from "./InfoPersonal";

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
      <SecondHeader />
      <section className="h-full  pb-10 mx-auto px-10">
        <div className="md:pt-[180px] pt-[130px] ">
          <h3 className="h3 font-bold">
            {name} {type} O Similar
          </h3>
        </div>

        <div className="flex  gap-x-32 md:flex-row flex-col">
          <div>
            <Image
              className="rounded-lg"
              src={image}
              width={750}
              height={500}
              alt="Imagen Auto"
            />
          </div>
          <div className="flex flex-col pt-10">
            <div>
              <h3 className="uppercase text-2xl md:h3 font-bold ">
                DESCRIPCIÓN DEL VEHÍCULO
              </h3>
              <h3 className="uppercase pt-3">Precio por dia U$D {price}</h3>
              <ul className="gap-3">
                <li className="pt-4">Pasajeros: {pasajeros}</li>
                <li className="pt-4">Puertas: {puertas}</li>
                <li className="pt-4">Baúl: {baul}</li>
                <li className="pt-4">Motor: {motor}</li>
                <li className="pt-4">Combustible: {combustible}</li>
                <li className="pt-4">Rendimiento: {rendimiento}</li>
                <li className="pt-4">Dirección: {direccion}</li>
                <li className="pt-4">Radio: {radio}</li>
                <li className="pt-4">
                  Aire Acondicionado: {aire_Acondicionado}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pb-0 pb-5 h-screen">
          <div className=" border-b-2 border-azulfuerte w-full">
            <h3 className="md:h3 text-2xl font-bold">INICIAR RESERVA ONLINE</h3>
          </div>
          <div className="w-full flex-col mt-5">
            <div className="flex items-center justify-between p-3  bg-white rounded-sm text-azulfuerte">
              <div>
                <p>Fecha y Lugar</p>
              </div>
              <div>
                <p>Paso 1/2</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-5">
              <LocationSelection />
              <DateSelection />
              <HoursSelection />
            </div>
            <div className="flex items-center justify-between p-3 mt-5 bg-white rounded-sm text-azulfuerte">
              <div>
                <p>Informacion Personal</p>
              </div>
              <div>
                <p>Paso 2/2</p>
              </div>
            </div>

            <div className=" pt-5">
              <InfoPersonal />
            </div>

            <div className="pt-5 pb-10  md:pb-0 w-fit">
              {/* Boton de Reservar */}
              <button className="btn btn-sm bg-azulfuerte p-3">
                Solicitar Reserva
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ElCarInfo;
