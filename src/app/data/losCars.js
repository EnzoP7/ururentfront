const losCars = [
  {
    id: 1,
    type: "Sedan",
    name: "Volkswagen Gol",
    pasajeros: 5,
    puertas: 4,
    motor: "1600cc",
    baul: "2 Maletas",
    combustible: "Nafta Super 95",
    rendimiento: "13km/lt",
    direccion: "Hidraulica",
    radio: "Radio con CD, MP3, Bluetooth, lector de tarjetas SD y puerto USB",
    aire_Acondicionado: "Sí",
    price: 29,
    starts: 5.0,
    image: "/images/cars/golsedan.webp",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
  {
    id: 2,
    type: "Hatch",
    name: "Volkswagen Gol",
    pasajeros: 5,
    puertas: 4,
    motor: "1600cc",
    baul: "2 Maletas",
    combustible: "Nafta Super 95",
    rendimiento: "13km/lt",
    direccion: "Hidraulica",
    radio: "Radio con CD, MP3, Bluetooth, lector de tarjetas SD y puerto USB",
    aire_Acondicionado: "Sí",
    price: 29,
    starts: 5.0,
    image: "/images/cars/golhatch.webp",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
  {
    id: 3,
    type: "Pick Up",
    name: "Fiat Strada",
    pasajeros: 4,
    puertas: 2,
    motor: "1300cc",
    baul: "800 kg de carga",
    combustible: "Nafta Super 95",
    rendimiento: "11km/lt",
    direccion: "Hidraulica",
    radio: "Radio con CD, MP3, Bluetooth, lector de tarjetas SD y puerto USB",
    aire_Acondicionado: "Sí",
    price: 32,
    starts: 4.8,
    image: "/images/cars/strada.webp",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "4 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1300 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
  {
    id: 4,
    type: "Pick Up",
    name: "Volkswagen Saveiro",
    pasajeros: 2,
    puertas: 2,
    motor: "1600cc",
    baul: "715 kg de carga",
    combustible: "Nafta Super 95",
    rendimiento: "12km/lt",
    direccion: "Hidraulica",
    radio: "Radio con CD, MP3, Bluetooth, lector de tarjetas SD y puerto USB",
    aire_Acondicionado: "Sí",
    price: 28,
    starts: 4.9,
    image: "/images/cars/saveiro.webp",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "2 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
  {
    id: 5,
    type: "Pick Up",
    name: "Nissan Frontier",
    pasajeros: 5,
    puertas: 4,
    motor: "2400cc",
    baul: "1 Tonelada de carga",
    combustible: "Diesel",
    rendimiento: "10km/lt",
    direccion: "Electrica",
    radio: "Radio con CD, MP3, Bluetooth, lector de tarjetas SD y puerto USB",
    aire_Acondicionado: "Sí",
    price: 35,
    starts: 4.7,
    image: "/images/cars/frontier.webp",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automática",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Diesel",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "2400 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "4x4",
      },
    ],
  },

  {
    id: 6,
    type: "Van",
    name: "Fiat Fiorino",
    pasajeros: 2,
    puertas: 3,
    motor: "1400cc",
    baul: "620 kg de carga",
    combustible: "Nafta Super 95",
    rendimiento: "14km/lt",
    direccion: "Hidraulica",
    radio: "Radio con CD, MP3, Bluetooth, lector de tarjetas SD y puerto USB",
    aire_Acondicionado: "Sí",
    price: 27,
    starts: 4.9,
    image: "/images/cars/fiorino.webp",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "2 Asientos",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Nafta",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1400 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Delantera",
      },
    ],
  },
];

export default losCars;
