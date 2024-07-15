import React from "react";

const InfoPersonal = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-8">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col pt-5">
          <label>Nombre Completo</label>
          <input
            type="text"
            placeholder="Nombre Completo"
            className="p-3 bg-white text-azulfuerte"
          />
        </div>
        <div className="flex flex-col pt-5">
          <label>Teléfono / Celular</label>
          <input
            type="tel"
            placeholder="Teléfono/Celular"
            className="p-3 bg-white text-azulfuerte"
          />
        </div>
        <div className="flex flex-col pt-5">
          <label>E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            className="p-3 bg-white text-azulfuerte"
          />
        </div>
        <div className="flex flex-col pt-5">
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            placeholder="Fecha Nacimiento"
            className="p-3 bg-white text-azulfuerte"
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 pt-5 md:pt-0">
        <label>Mensaje</label>
        <textarea
          placeholder="Escriba su mensaje aquí"
          className="p-3 bg-white text-azulfuerte h-full"
          rows="8"
        />
      </div>
    </div>
  );
};

export default InfoPersonal;
