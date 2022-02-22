import mongoose from "mongoose";

const contactoShema= new mongoose.Schema({
    name: String,
    fijo: Number,
    celular: Number,
   
})

const cliente= mongoose.model("contactos",contactoShema);

export default cliente;