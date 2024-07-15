"use client";
import React, { useState } from "react";
import Condiciones from "./Condiciones";
import { motion } from "framer-motion";

import { fadeIn } from "../../../../variants";

const PreguntasFrecuentes = () => {
  const [faqs, setFaqs] = useState([
    {
      pregunta:
        "¿Cuáles son los requisitos para alquilar un vehículo en URURENT?",
      respuesta:
        "Debe tener mínimo 21 años de edad y dos años de antigüedad en la licencia de conducir, documento de identidad o pasaporte vigente y una tarjeta de crédito nacional o internacional.",
      isOpen: true,
    },
    {
      pregunta: "¿Qué está incluido dentro de la tarifa?",
      respuesta:
        "Nuestras tarifas incluyen el precio del vehículo, el seguro franquicias correspondientes.Nuestros alquileres diarios contemplan un kilometraje máximo de 250Km y losalquileres por dos días cuentan con 500Km como máximo. Los alquileres mayores atres días en todos los casos son con kilometraje libre. En caso que el cliente solicite kilometraje libre para alquileres menores a tres díasdeberá abonar un cargo por dicho servicio.",
      isOpen: false,
    },
    {
      pregunta:
        "¿Existe la posibilidad de contratar opcionales? Por Ejemplo: ¿GPS?",
      respuesta:
        "Sí, puede contratar GPS, Silla de bebe, WIFI para el vehículo. Se deben solicitar al realizar la reserva y están sujetos a reconfirmación en mostrador al momento de tomar el vehículo.",
      isOpen: false,
    },
    {
      pregunta:
        "¿Existe la posibilidad de que me entreguen el vehículo en el hotel o domicilio particular?",
      respuesta:
        "Sí, URU RENT realiza un servicio personalizado por lo tanto entrega el vehículo dondeel cliente indique al momento de realizar su reserva. Lo mismo sucede al momento de la devolución del vehículo.",
      isOpen: false,
    },
    {
      pregunta:
        "¿Qué sucede en caso de accidente, o si el vehículo es dañado o hurtado?",
      respuesta:
        "En cualquiera de estos casos llame a nuestros celulares de guardia 24 horas.Recuerde dejar cerradas las ventanillas y retirar el frente de radio si el mismo es desmontable cuando no esté en el vehículo. Asegúrese de leer los términosy condiciones del contrato y cumplir con todos los requerimientos para mantener las coberturas contratadas. Asimismo no olvide que Ud. Es responsable por todas las contravenciones de tránsito o estacionamiento, por lo que es importante que maneje correctamente y observe todas las indicaciones.",
      isOpen: false,
    },
    {
      pregunta:
        "¿Se tomará un depósito en garantia de mi tarjeta de crédito? De ser asi, ¿Cuánto seria?",
      respuesta:
        "Efectivamente, el monto del mismo varía según la categoría del vehículo solicitado y eltipo de cobertura contratada. Esta garantía se realiza con tarjeta de crédito y es independiente del pago del alquiler. La misma será devuelta al cierre del contrato si el vehículo es devuelto sin daños, faltante de combustible, infracciones de tránsito u otros cargos pendientes.",
      isOpen: false,
    },
    {
      pregunta:
        "¿Cuáles son los impuestos que debo pagar en Uruguay al rentar un vehículo?",
      respuesta:
        "Solamente el impuesto al valor agregado (IVA) que es del 22%. Recuerde que si paga con tarjeta de crédito y/o débito por ley se aplica devolución de 9 puntos si la tarjeta es emitida en Uruguay, y del total del impuesto si la misma es emitida en el extranjero. Esta devolución solamente aplica para medios de pago electrónicos.",
      isOpen: false,
    },
    {
      pregunta:
        "¿Se puede tomar un vehículo en una oficina y devolverlo en otra?",
      respuesta:
        "Sí, URU RENT le brinda este servicio los 365 días del año las 24 horas del día.Consulte por los cargos de este servicio.",
      isOpen: false,
    },
    // Agrega más preguntas frecuentes aquí
  ]);

  const toggleFaq = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <section className="flex flex-col items-center min-h-screen xl:min-h-[90vh] bg-[#b2b7c2]/10">
      <motion.div
        // variants={fadeIn("right", 0.6)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.6 }}
        className="max-w-3xl mx-auto pt-8 xl:px-0 px-10"
      >
        <h2 className="text-4xl text-center font-bold mb-4">
          Preguntas Frecuentes
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-xl text-center font-semibold focus:outline-none py-2"
              onClick={() => toggleFaq(index)}
            >
              {faq.pregunta}
            </button>
            {faq.isOpen && <p className="mt-2">{faq.respuesta}</p>}
          </div>
        ))}
      </motion.div>
      {/* <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="max-w-3xl mx-auto py-8 hidden xl:block"
      >
        <h2 className="text-3xl font-bold mb-4">Condiciones para Alquilar</h2>
        <ul>
          <li>Edad mínima de alquiler: 21 años</li>
          <li>Licencia de conducir del país de origen y vigente al día</li>
          <li>
            Tarjeta de crédito (consulte opciones en caso de no poseer tarjeta
            puede dejar un depósito en efectivo)
          </li>
          <li>
            La tarifa por día contempla el alquiler del automóvil por 24 horas,
            con 1 (una) hora de tolerancia para su devolución. A partir de dicho
            plazo, se cobrará medio día de alquiler.
          </li>
          <li>
            A partir de las 5 (cinco) horas se abonará el equivalente 1 (un) día
            de alquiler, lo cual no implica la retención del automóvil.
          </li>
          <li>
            El automóvil se entrega con el depósito de combustible completo. En
            caso de faltantes en la devolución, se cobrará costo de
            reabastecimiento.
          </li>
          <li>
            Las reservas podrán ser atendidas con automóviles de la misma
            categoría o, de no haber disponibilidad, de una categoría superior.
          </li>
          <li>
            En caso de hurto, robo, siniestro o colisión, será necesario
            presentar una denuncia radicada ante la autoridad correspondiente.
          </li>
          <li>
            La devolución del automóvil en otro local, ciudad o destino que se
            indique, implicará abonar el cargo de la Tasa de Retorno. Consultar
            en central de consultas y reservas.
          </li>
          <li>
            Una vez transcurrido el horario previsto para el retiro el
            automóvil, la reserva será mantenida durante 1 (una) hora adicional.
          </li>
          <li>
            El kilometraje incluido en la tarifa es de 250 km por día. Los km
            adicionales tienen cargo, este puede ser por km o contratar
            kilometraje libre por un día. Si el alquiler es por tres días o más,
            el kilometrajes es totalmente libre.
          </li>
          <li>
            La utilización de adiciones tales como silla de bebé y/o GPS deben
            ser contratados con anticipación. La habilitación de conductores
            adicionales no tiene cargo alguno.
          </li>
        </ul>
      </motion.div> */}
    </section>
  );
};

export default PreguntasFrecuentes;
