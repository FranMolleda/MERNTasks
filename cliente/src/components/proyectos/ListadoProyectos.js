import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  const contextoProyectos = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = contextoProyectos;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (!proyectos || proyectos.length === 0)
    return <p>No hay Proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto, i) => (
        <Proyecto key={i} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
