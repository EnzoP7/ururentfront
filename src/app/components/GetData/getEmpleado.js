"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const getEmpleado = (id) => {
  const [empleado, setEmpleado] = useState();

  useEffect(() => {
    const fecthEmpleado = async () => {
      try {
        const elID = id;
        console.log("EL ID QUE TRAE EMPLEADO: ", elID);
        const response = await axios.get(
          `http://localhost:3000/api/empleado/${elID}`
        );
        setEmpleado(response.data); // Devuelve solo la propiedad 'data' de la respuesta
      } catch (error) {
        console.error("Error al obtener al Empleado:", error);
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
      }
    };
    fecthEmpleado();
  }, []);

  return empleado;
};

export default getEmpleado;
