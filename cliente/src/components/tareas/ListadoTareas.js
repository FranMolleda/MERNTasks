import React, { useContext, useEffect } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Hosting", estado: false },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Pasarela de pago", estado: true },
  ];

  if (!proyecto) {
    return <h2>Selecciona un Proyecto</h2>;
  }

  return (
    <>
      {proyecto ? <h2>Proyecto: {proyecto[0].nombre}</h2> : null}
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="listado-tareas">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea, i) => <Tarea key={i} tarea={tarea} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyecto[0].id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
