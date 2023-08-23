import { Schema, model, models } from 'mongoose'

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'The title is required'],
      unique: [true, 'The title must be unique'],
      trim: true,
      maxlength: [50, 'The title must be less than 50 characters']
    },
    complete: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export default models.Task || model('Task', taskSchema)
