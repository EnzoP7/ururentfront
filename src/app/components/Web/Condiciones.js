import React from "react";

const Condiciones = () => {
  return (
    <section className="h-screen    bg-[#b2b7c2]/10">
      <div className=" mx-auto py-8 px-8">
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
      </div>
    </section>
  );
};

export default Condiciones;
