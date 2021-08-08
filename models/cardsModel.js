import mongoose from "./configs/mongooseConfiguration";
const MODEL_NAME = "cards";
const cardsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  imageRation: Number,
  preview: String,
  github: String,
});

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, cardsSchema, "cards");
