import { Schema, model, models } from "mongoose";
import { nanoid } from 'nanoid';

const UrlSchema = new Schema({
  code: {
    type: String,
    unique: true,
    default: () => nanoid(8),
  },
  url: { 
    type: String, 
    required: true 
  },
  clicked: { 
    type: Number, 
    default: 0 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  sessionToken: { 
    type: String 
  }, // Guardar session token en localstorage -> recuperar session token al crear un nuevo registro
});

const Urls = models.Urls || model("Urls", UrlSchema);

export default Urls;
