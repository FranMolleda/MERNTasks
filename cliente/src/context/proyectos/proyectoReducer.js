import { FORMULARIO_PROYECTO } from "../../types";

//El Reducer lo que hace es cambiar el state

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return { ...state, formulario: true };

    default:
      return state;
  }
};
