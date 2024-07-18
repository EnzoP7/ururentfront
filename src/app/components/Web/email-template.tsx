import * as React from "react";

interface EmailTemplateProps {
  Nombre: string;
  Teléfono: string;
  Email: string;
  FechaNac: string;
  Mensaje: string;
  laLocation: string;
  laDateSelection: {
    startDate: string;
    endDate: string | null;
  }[];
  laHora: string;
  vehiculoAAlquilar: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Nombre,
  Teléfono,
  Email,
  FechaNac,
  Mensaje,
  laLocation,
  laDateSelection,
  laHora,
  vehiculoAAlquilar,
}) => (
  <div style={styles.container}>
    <img
      src={"https://www.ururent.com.uy/page_assets/img/ururent-logo.png"}
      alt="Logo de Ururent"
      style={styles.logo}
    />
    <p style={styles.text}>Estimado equipo de Ururent,</p>
    <p style={styles.text}>
      Me dirijo a ustedes para consultar la disponibilidad de autos de alquiler.
      A continuación, les proporciono mis datos y las fechas de interés:
    </p>
    <p style={styles.detail}>
      <strong>Nombre:</strong> {Nombre}
    </p>
    <p style={styles.detail}>
      <strong>Teléfono:</strong> {Teléfono}
    </p>
    <p style={styles.detail}>
      <strong>Email:</strong> {Email}
    </p>
    <p style={styles.detail}>
      <strong>Fecha de Nacimiento:</strong> {FechaNac}
    </p>
    <p style={styles.detail}>
      <strong>Vehiculo:</strong> {vehiculoAAlquilar}
    </p>
    <p style={styles.detail}>
      <strong>Mensaje:</strong> {Mensaje}
    </p>
    <p style={styles.detail}>
      <strong>Ubicación de alquiler:</strong> {laLocation}
    </p>
    <p style={styles.detail}>
      <strong>Fecha de inicio del alquiler:</strong>{" "}
      {laDateSelection[0].startDate.toString()}
    </p>
    <p style={styles.detail}>
      <strong>Fecha de fin del alquiler:</strong>{" "}
      {laDateSelection[0].endDate
        ? laDateSelection[0].endDate.toString()
        : "No especificada"}
    </p>
    <p style={styles.detail}>
      <strong>Hora de recogida del vehículo:</strong> {laHora}
    </p>
    <p style={styles.text}>
      Quedo a la espera de su respuesta para confirmar la disponibilidad y
      proceder con el alquiler.
    </p>
    <p style={styles.text}>Saludos cordiales,</p>
    <p style={styles.name}>{Nombre}</p>
  </div>
);

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "auto",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  detail: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "5px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  logo: {
    width: "150px", // Ajusta el tamaño según sea necesario
    marginBottom: "20px", // Espacio entre el logo y el contenido siguiente
  },
};
