const mongoose = require("mongoose");

const productoSchema=mongoose.Schema({
    nombre:String,
    precio:Number,
    descripcion:String,
    cantidad:Number,
    imagen:String,
    fecha: {
        type: Date,
        default: Date.now // ✔️ Esto es correcto
      }
      
})

module.exports=mongoose.model("Producto",productoSchema);