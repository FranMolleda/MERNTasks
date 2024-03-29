import React from "react";
import ListadoProyectos from "../proyectos/ListadoProyectos";
import NuevoProyecto from "../proyectos/NuevoProyecto";

const SideBar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
        <NuevoProyecto />
      </h1>
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default SideBar;
