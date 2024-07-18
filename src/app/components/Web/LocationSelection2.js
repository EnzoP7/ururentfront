"use client";

import { Menu, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  "Carmelo",
  "Montevideo",
  "Nueva Helvecia",
  "Dolores",
  "Nueva Palmira",
];

const LocationSelection2 = ({ setLaLocation }) => {
  const [location, setLocation] = useState("Selecciona Ubicación");

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row z-10">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent-hover xl:text-accent" />
                <div className="text-[15px] uppercase font-bold">
                  Selecciona Ubicación
                </div>
              </div>
              <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-0 transform -translate-x-1/2 
            xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]"
          >
            {locations.map((laLocation, index) => (
              <Menu.Item key={index}>
                {({ close }) => (
                  <div
                    onClick={() => {
                      setLocation(laLocation);
                      setLaLocation(laLocation);
                      close();
                    }}
                    className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] text-black uppercase"
                  >
                    {laLocation}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

export default LocationSelection2;
