import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;
  const tareasContext = useContext(TareaContext);
  const { obtenerTareas } = tareasContext;

  const seleccionarProyecto = () => {
    proyectoActual(proyecto.id);
    obtenerTareas(proyecto.id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={seleccionarProyecto}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
