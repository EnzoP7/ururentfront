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
            <button className="btn btn-sm bg-accent-hover w-[164px] mx-auto">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
