"use client";
import React from "react";
import LayoutSistema from "../../layoutSistema";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Datos Que se estan Enviando: ", data);
  };

  return (
    <div>
      <LayoutSistema>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="matricula">Matricula</label>
            <input type="text" id="matricula" {...register("matricula")} />

            <button>Submit</button>
          </form>
        </div>
      </LayoutSistema>
    </div>
  );
};

export default page;
