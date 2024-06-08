"use client";
import { useEffect, useState } from "react";

const useUserInfoAndToken = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const Token = localStorage.getItem("token");
    const Empleado = localStorage.getItem("empleado");
    const EmpleadoNombre = localStorage.getItem("empleadoNombre");
    const EmpleadoApellido = localStorage.getItem("empleadoApellido");
    const EmpleadoId = localStorage.getItem("empleadoId");
    const EmpleadoRol = localStorage.getItem("empleadoRol");
    const EmpleadoSucursalId = localStorage.getItem("empleadoSucursalId");
    const EmpleadoMail = localStorage.getItem("empleadoMail");
    const EmpleadoCedula = localStorage.getItem("empleadoCedula");

    console.log(
      Token,
      Empleado,
      EmpleadoId,
      EmpleadoNombre,
      EmpleadoApellido,
      EmpleadoRol,
      EmpleadoSucursalId,
      EmpleadoMail,
      EmpleadoCedula
    );

    setUserInfo({
      Token,
      Empleado,
      EmpleadoId,
      EmpleadoNombre,
      EmpleadoApellido,
      EmpleadoRol,
      EmpleadoSucursalId,
      EmpleadoMail,
      EmpleadoCedula,
    });
  }, []);

  return userInfo;
};

export default useUserInfoAndToken;
