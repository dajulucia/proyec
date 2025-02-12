import React from 'react';
import {Routes, Route} from "react-router-dom";
import { HomeProductos } from '../components/productos'; 
import {home} from '../page'


export function Rutas() {
  const Layouts = (Layout, Page) => {
    <Layout>
      <Page />
    </Layout>;
  };

  return (
    <Routes>
      <Route path="/" element={Layouts(Layouts, home)} />
      <Route path="/producto" element={Layouts(Layouts, HomeProductos)} />
    </Routes>
  );
}