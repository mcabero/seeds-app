import React from "react";
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Containers/Cartview/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const mensaje = "Bienvenidos a Seeds online";
  
  return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
            <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App