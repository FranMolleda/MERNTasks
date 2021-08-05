import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Hosting", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir Colores", estado: false, proyectoId: 3 },
      { id: 4, nombre: "Elegir Pasarela de pago", estado: true, proyectoId: 4 },
      { id: 5, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { id: 6, nombre: "Elegir Hosting", estado: false, proyectoId: 1 },
      { id: 7, nombre: "Elegir Colores", estado: false, proyectoId: 3 },
      { id: 8, nombre: "Elegir Plataforma", estado: true, proyectoId: 4 },
      { id: 9, nombre: "Elegir Hosting", estado: false, proyectoId: 1 },
      { id: 10, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 11, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 12, nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
      { id: 13, nombre: "Elegir Colores", estado: false, proyectoId: 3 },
    ],
    tareasproyecto: [],
    errortarea: null,
    tareaseleccionada: null,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = (tareasId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: tareasId,
    });
  };

  const agregarTarea = (nuevatarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: nuevatarea,
    });
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminarTarea = (tareaId) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tareaId,
    });
  };

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const editarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        editarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
