import {Schema, model, models} from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required"],
      unique: [true, "The title must be unique"],
      trim: true,
      maxlength: [50, "The title must be less than 50 characters"],
    },
    description: {
      type: String,
      required: [true, "The description is required"],
      trim: true,
      maxlength: [255, "The description must be less than 255 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export default models.Task || model("Task", taskSchema);
