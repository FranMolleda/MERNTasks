import React from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Hosting", estado: false },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Pasarela de pago", estado: true },
  ];
  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="listado-tareas">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea, i) => <Tarea key={i} tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
