import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />
          <div className="flex items-center px-6">
            <button
              className="btn btn-sm bg-accent-hover text-accent w-[164px] mx-auto"
              onClick={() =>
                (window.location.href =
                  "mailto:enzopontet2003@gmail.com?subject=Estoy Interesado en Consultar Disponibilidad de Vehiculos")
              }
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
