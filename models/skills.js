import mongoose from "./configs/mongooseConfiguration";
const MODEL_NAME = "skills";
const skillsSchema = new mongoose.Schema({
  webDevelopment: [String],
  otherProgrammingSkills: [String],
  softSkills: [String],
  technicalSkills: [String],
  futurePlans:[String]
});

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, skillsSchema, "skills");