import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const tareasContext = useContext(TareaContext);
  const { proyecto, eliminarProyecto } = proyectosContext;
  const { tareasproyecto } = tareasContext;

  if (!proyecto) {
    return <h2>Selecciona un Proyecto</h2>;
  }

  return (
    <>
      {proyecto ? <h2>Proyecto: {proyecto[0].nombre}</h2> : null}
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="listado-tareas">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea, i) => (
              <CSSTransition key={i} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
