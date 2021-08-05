import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import { v4 as uuidv4 } from "uuid";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  const tareasContext = useContext(TareaContext);
  const {
    errortarea,
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    editarTarea,
    limpiarTarea,
  } = tareasContext;

  useEffect(() => {
    if (tareaseleccionada !== null) {
      setNuevatarea(tareaseleccionada);
    } else {
      setNuevatarea({
        nombre: "",
        estado: false,
        proyectoId: null,
      });
    }
  }, [tareaseleccionada]);

  const [nuevatarea, setNuevatarea] = useState({
    nombre: "",
    estado: false,
    proyectoId: null,
  });

  const { nombre, proyectoId } = nuevatarea;

  if (!proyecto) return null;

  const handleChange = (e) => {
    setNuevatarea({
      ...nuevatarea,
      [e.target.name]: e.target.value,
      proyectoId: proyecto[0].id,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    if (tareaseleccionada === null) {
      nuevatarea.id = uuidv4();
      agregarTarea(nuevatarea);
    } else {
      editarTarea(nuevatarea);
      limpiarTarea();
    }

    obtenerTareas(proyectoId);

    setNuevatarea({
      nombre: "",
      estado: false,
      proyectoId: null,
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            value={nombre}
            name="nombre"
            placeholder="Nombre Tarea..."
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>

      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
