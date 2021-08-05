import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const proyectosContext = useContext(proyectoContext);

  const {
    formulario,
    mostrarFormulario,
    errorformulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  const onChangeProyecto = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    if (nombre === "") {
      mostrarError();
      return;
    }

    agregarProyecto(proyecto);

    setProyecto({ nombre: "" });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => mostrarFormulario()}
        className="btn btn-block btn-primario"
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={onChangeProyecto}
            value={nombre}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">EL nombre del proyecto es obligatorio</p>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
