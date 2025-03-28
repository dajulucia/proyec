/*  const express=require("express");

const productosController=require("../controllers/producto.controllers");
const { createConnection } = require("mongoose");

const api=express.Router();

api.post("/createProducto", [md_mparyt],productosController.createProductos);
api.get("/getProducto", productosController.getProductos);
api.put("/updateProducto/:id", productosController.updateProductos);
api.delet("/delproducto", productosController.delProductos);

 */
const express=require("express");
const multiparty=require("connect-multiparty");

const productosController=require("../controllers/producto.controllers");

const md_mparty=multiparty();
const api=express.Router();

api.post("/createproduct",[md_mparty], productosController.createProducto);
api.get("/getproducto", productosController.getProducto);
api.patch("/updateproducto/:id",[md_mparty],productosController.updateProducto);
api.delete('/delproducto/:id', productosController.delProducto);

module.exports=api;