import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
  name: { type: String, required: true, minlength: 1, maxLength: 50 },
  price: { type: Number, required: true, min: 0, max: 150 }
})