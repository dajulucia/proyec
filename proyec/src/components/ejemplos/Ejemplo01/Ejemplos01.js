
import React, {useState} from 'react';
import {Ejemplo02, Ejemplos01} from "../Ejemplo02";
import "./Ejemploso1.scss"
//hooks useState

export  function Ejemplos01() {
    const [contador, setContador]=useState(0);
  
    const incrementarvalor=()=>{
      setContador(contador+1)
    }
    const decrementarvalor=()=>{
      setContador(contador+-1)
    }
    const fondo={
      tema:{
        backgrroundColor:'black',
        color:'white'
      }
    }
    return (
      <div >
      <Ejemplo02 contador={contador} incrementar={incrementarvalor} decrementar={decrementarvalor}fondo={fondo}/>
         </div>
  )
  }