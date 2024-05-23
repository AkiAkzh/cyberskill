import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"
import "./global.css";
import Store from "./store/store";

interface State{
  store : Store,
 }

const store = new Store();

export const Context = createContext<State>({
  store,
})

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Context.Provider value={{store}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
