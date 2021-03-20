// el inicio de la app

import React,{useState, createContext} from "react";
import {render} from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./containers/Main";
import { Provider } from "react-redux";
import store from "../src/store/state/store"

export const UserContext = createContext()

const Root = () => {
  const [user,setUser] = useState();
  return (
    <>
       <Provider store={store}>
         <UserContext.Provider value={{user, setUser}}>
     <BrowserRouter>
     <Route path="/" component={Main} />
   </BrowserRouter>
         </UserContext.Provider>
</Provider>
    </>
  );
};

export default render(<Root />, document.getElementById("root"));


/* 
    MUST HAVE
    Buscar películas y listarlas.
    Poder ver los detalles de una película en particular.
    Crear Usuarios.
    Loggearse y desloggearse con un usuario. 
    SHOULD HAVE
    Ver Pista
    Poder agregar una película a tu lista de favoritos.
    Ver tu lista de películas favoritas.
    Poder sacar películas de tu lista de favoritos. 
    NICE TO HAVE
    Ver Pista
    Buscar Usuarios.
    Ver el perfil de un usuario con sus películas favoritas. */
