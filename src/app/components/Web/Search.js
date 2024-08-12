"use client";
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/search";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl.pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg `}
    >
      <div
        className={`flex h-full  ${
          searchActive && "container mx-auto pt-5 pb-1"
        }`}
      >
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0 xl:pr-3">
          <button
            onClick={() =>
              (window.location.href =
                "mailto:enzopontet2003@gmail.com?subject=Estoy Interesado en Consultar Disponibilidad de Vehiculos")
            }
            className={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : `btn btn-lg btn-accent xl:w-[184px]`
            }  `}
          >
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
