import React from "react";
import './App.css'
import { ItemListContainer } from './components/Containers/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  const company = "Seeds online";
  const presentacion = "La tienda online mas completa del mercado";
  const bajada = "Bienvenidos a Seeds online";

  return (
      <>
        <Navbar companyName={company} />
        <ItemListContainer greeting={presentacion} mensaje={bajada} />
      </>
  );
}

export default App