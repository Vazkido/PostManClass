import mongoose, { mongo } from "mongoose";

const noteSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const Note = mongoose.model("notes", noteSchema);
export default Note;
