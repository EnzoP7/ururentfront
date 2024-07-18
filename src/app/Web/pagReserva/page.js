import React from "react";
import IniciarReserva2 from "../../components/Web/IniciarReserva2";
import SecondHeader from "../../components/Web/SecondHeader";
import Footer from "../../components/Web/Footer";

const page = () => {
  return (
    <div className="">
      <SecondHeader />
      <div>
        <h3 className="h3">Consultar Disponibilidad</h3>
      </div>
      <div className="py-10 px-5">
        <IniciarReserva2 />
      </div>

      <Footer />
    </div>
  );
};

export default page;
