//async function createProducto(req,res) {
   /*  res.status(200).send({msg:"crear productos"})


const producto = require('../modelos/producto'); */
/* 
api.post("/createproducto", productosController.createProducto);
api.post("/getproducto", productosController.getProducto);
api.post("/updateproducto", productosController.updateroducto);

module.exports={
    createProducto
} */

    const Producto = require('../modelos/producto');

async function createProducto(req, res) {
    const producto = new pr(req.body);
    // console.log(producto);

    if(req.files.image){
        const imagenPath=image.getFile(req.files.image);
        producto.image=imagenPath
    }

    try {
        const datos = await producto.save();
        res.status(200).send(datos);
    } catch (error) {
        res.status(500).send({ msg: "Error al guardar los datos" });
    }
}

async function getProducto(req, res) {
    try {
        const buscarProducto = await Producto.find();
        res.status(200).send(buscarProducto);
    } catch (error) {
        res.status(500).send({ msg: "Error al buscar los datos" });
    }
}

async function delProducto(req, res) {
    res.status(200).send({ msg: "Eliminar producto" });
}

async function updateProducto(req, res) {
    res.status(200).send({ msg: "Actualizar productos" });
}

async function updateProducto(req, res) {
   const {id}=req.params;
   const updateProducto=req.body;

   try{
    const update=await producto.findByIAndUpdate8({_id:id},updateproducto);

   }catch (error){
    res.status(400).send({msg:"Error al actualizar"})
   }
}



module.exports = {
    createProducto,
    getProducto,
    delProducto,
    updateProducto
}

     