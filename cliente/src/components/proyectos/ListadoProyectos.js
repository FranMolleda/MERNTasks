import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  const contextoProyectos = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = contextoProyectos;

  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!proyectos || proyectos.length === 0)
    return <p>No hay Proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto, i) => (
          <CSSTransition key={i} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
