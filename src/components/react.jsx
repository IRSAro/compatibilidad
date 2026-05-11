import React from "react";

const Saludador = ({ nombre = "Visitante", mensaje }) => {
  const fechaActual = new Date().toLocaleDateString();

  return (
    <div
      style={{
        border: "1px solid #4a5568",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#f7fafc",
        color: "#2d3748",
        maxWidth: "300px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ color: "#2b6cb0" }}>¡Hola, {nombre}!</h2>
      <p>{mensaje || "Bienvenido a mi proyecto en Astro."}</p>
      <hr />
      <small>Fecha: {fechaActual}</small>
    </div>
  );
};

export default Saludador;
