const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    name: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["ToDo", "In Progress", "Completed"],
      default: "ToDo",
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    startDate: { type: Date },
    endDate: { type: Date },
    dependencies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    estimatedDuration: { type: Number },
    actualDuration: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
