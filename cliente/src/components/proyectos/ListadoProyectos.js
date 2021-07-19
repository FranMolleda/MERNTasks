import React, { useContext } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  const contextoProyectos = useContext(proyectoContext);
  const { proyectos } = contextoProyectos;

  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto, i) => (
        <Proyecto key={i} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
