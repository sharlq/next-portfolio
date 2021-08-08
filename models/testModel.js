import mongoose from "./configs/mongooseConfiguration";
const MODEL_NAME = 'test'
const testSchema = new mongoose.Schema({
item:String
})

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, testSchema, "Teave");