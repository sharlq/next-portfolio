import mongoose from "./configs/mongooseConfiguration";
const MODEL_NAME = "resume";
const resumeSchema = new mongoose.Schema({
    link:String
});

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, resumeSchema, "resume");