import React from "react";

const Condiciones = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center md:py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Condiciones para Alquilar
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Edad mínima de alquiler:</span> 21
            años
          </li>
          <li>
            <span className="font-semibold">Licencia de conducir:</span> del
            país de origen y vigente al día
          </li>
          <li>
            <span className="font-semibold">Tarjeta de crédito:</span> consulte
            opciones en caso de no poseer tarjeta, puede dejar un depósito en
            efectivo
          </li>
          <li>
            <span className="font-semibold">Tarifa por día:</span> contempla el
            alquiler del automóvil por 24 horas, con 1 (una) hora de tolerancia
            para su devolución. A partir de dicho plazo, se cobrará medio día de
            alquiler.
          </li>
          <li>
            <span className="font-semibold">Después de 5 horas:</span> se
            abonará el equivalente a 1 (un) día de alquiler, lo cual no implica
            la retención del automóvil.
          </li>
          <li>
            <span className="font-semibold">Depósito de combustible:</span> el
            automóvil se entrega con el depósito de combustible completo. En
            caso de faltantes en la devolución, se cobrará costo de
            reabastecimiento.
          </li>
          <li>
            <span className="font-semibold">Reservas:</span> podrán ser
            atendidas con automóviles de la misma categoría o, de no haber
            disponibilidad, de una categoría superior.
          </li>
          <li>
            <span className="font-semibold">
              En caso de hurto, robo, siniestro o colisión:
            </span>{" "}
            será necesario presentar una denuncia radicada ante la autoridad
            correspondiente.
          </li>
          <li>
            <span className="font-semibold">Devolución en otro lugar:</span>{" "}
            implicará abonar el cargo de la Tasa de Retorno. Consultar en
            central de consultas y reservas.
          </li>
          <li>
            <span className="font-semibold">Reserva:</span> una vez transcurrido
            el horario previsto para el retiro del automóvil, la reserva será
            mantenida durante 1 (una) hora adicional.
          </li>
          <li>
            <span className="font-semibold">Kilometraje incluido:</span> en la
            tarifa es de 250 km por día. Los km adicionales tienen cargo, este
            puede ser por km o contratar kilometraje libre por un día. Si el
            alquiler es por tres días o más, el kilometraje es totalmente libre.
          </li>
          <li>
            <span className="font-semibold">Adiciones:</span> tales como silla
            de bebé y/o GPS deben ser contratados con anticipación. La
            habilitación de conductores adicionales no tiene cargo alguno.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Condiciones;
