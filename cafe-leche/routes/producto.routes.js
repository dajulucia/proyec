/*  const express=require("express");

const productosController=require("../controllers/producto.controllers");
const { createConnection } = require("mongoose");

const api=express.Router();

api.post("/createProducto", [md_mparyt],productosController.createProductos);
api.get("/getProducto", productosController.getProductos);
api.put("/updateProducto/:id", productosController.updateProductos);
api.delet("/delproducto", productosController.delProductos);

 */
const express = require("express");
const multer = require("multer");  // Asegúrate de instalar multer con 'npm install multer'
const productosController = require("../controllers/producto.controllers");

const upload = multer(); // Configura multer si es necesario

const api = express.Router();

api.post("/createProducto", upload.single('image'), productosController.createProducto);
api.get("/getProducto", productosController.getProducto);
api.put("/updateProducto/:id", productosController.updateProducto);
api.delete("/delProducto/:id", productosController.delProducto);

module.exports = api;
