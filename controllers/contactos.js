import contactos from "../models/contactos.js";


const listContactos = async (req, res) => {
  const contactoShema = await contactos.find();
  if (!contactoShema || contactoShema.length == 0)
    return res.status(400).send("Empty contact list");
  return res.status(200).send({ contactoShema });
};


export default {
  
  listContactos
  
};
