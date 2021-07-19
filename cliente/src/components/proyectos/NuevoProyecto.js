import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const proyectosContext = useContext(proyectoContext);

  const { formulario, mostrarFormulario } = proyectosContext;

  const onChangeProyecto = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();
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
            className="btn btn-primario btn-block"
            defaultValue="Agregar Proyecto"
          />
        </form>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
