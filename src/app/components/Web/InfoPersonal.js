import React from "react";

const InfoPersonal = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="">
          <div className="flex flex-col">
            <label>Nombre Completo</label>
            <input
              type="text"
              placeholder="Nombre Completo"
              className="p-3 bg-white text-azulfuerte max-w-2xl"
            />
          </div>
          <div className="flex flex-col pt-5">
            <label>Teléfono / Celular</label>
            <input
              type="tel"
              placeholder="Teléfono/Celular"
              className="p-3 bg-white text-azulfuerte max-w-2xl"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col pt-5">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              className="p-3 bg-white text-azulfuerte max-w-2xl"
            />
          </div>
          <div className="flex flex-col pt-5">
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              placeholder="Fecha Nacimiento"
              className="p-3 bg-white text-azulfuerte max-w-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPersonal;
