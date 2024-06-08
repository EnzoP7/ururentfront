"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const getEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const fecthVehiculo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/empleado");
        setEmpleados(response.data); // Devuelve solo la propiedad 'data' de la respuesta
      } catch (error) {
        console.error("Error al obtener los Empleados:", error);
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
      }
    };
    fecthVehiculo();
  }, []);

  return empleados;
};

export default getEmpleados;
