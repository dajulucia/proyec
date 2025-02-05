import React from 'react'
import {Tabs, Tab} from "react-bootstrap";
import {ItemProductos} from "../ItemProductos/itemproductos"
import {datos} from '../../../utilidades/bd';


export function homeP() {
  console.log(datos);
    const fondo={
      tema:{
        backgroundColor:'black',
        color:"white",
        fontSize:'20px'
      }
    }
    return (
      <div className='container' style={fondo.tema}>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Lista de Productos">
        {
          Datos.map((productos)=>(
            <ItemProductos/>
          )
          )
        }
        
      </Tab>
    </Tabs>
    </div>
    )
  }
