"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const getVehiculo = (id) => {
  const [vehiculos, setVehiculos] = useState();

  useEffect(() => {
    const fecthVehiculo = async () => {
      try {
        const elID = id;
        console.log("EL ID QUE TRAE VEHICULO: ", elID);
        const response = await axios.get(
          `http://localhost:3000/api/vehiculo/${elID}`
        );
        setVehiculos(response.data); // Devuelve solo la propiedad 'data' de la respuesta
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
      }
    };
    fecthVehiculo();
  }, []);

  return vehiculos;
};

export default getVehiculo;
