import React from 'react';
import {Routes, Route} from "react-router-dom";
import { HomeProductos } from '../components/productos'; 
import {home} from '../page'

export function Rutas() {
  return (
      <Routes>
        <Route path= ' / ' element={<home/>}/>
        <Route path= ' / ' element={<HomeProductos/>}/>
      </Routes>
  )
}
