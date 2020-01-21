const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        required: true,
        default: false
      }
    },
    { timestamps: true }
)
  // create an object that contains methods for mongoose to interface with MongoDB

mongoose.model("Task", TaskSchema)