import React, { useContext } from "react";
import TareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {
  const tareasContext = useContext(TareaContext);
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareasContext;

  const [proyectoActual] = proyecto;

  const eliminarTareaSeleccionada = (tareaId) => {
    eliminarTarea(tareaId);
    obtenerTareas(proyectoActual.id);
  };

  const cambiarEstado = (tarea) => {
    tarea.estado = !tarea.estado;
    cambiarEstadoTarea(tarea);
  };

  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado ? (
          <button
            className="completo"
            type="button"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            className="incompleto"
            type="button"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => eliminarTareaSeleccionada(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
