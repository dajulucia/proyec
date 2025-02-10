import React from "react";
import { Card } from "react-bootstrap";
import './ItemProductos.scss'

export function ItemProductos({producto}) {
  return (
    
      <Card>
        <Card.Img variant="top" src={producto.imagen} style={{width:"200px", height:"70%"}} />
        <Card.Body className="body">
          <Card.Title className="body_title">{producto.nombre}</Card.Title>
          <Card.Text className="body_text">
            {producto.description}
          </Card.Text>
        </Card.Body>
      </Card>
  
  );
}