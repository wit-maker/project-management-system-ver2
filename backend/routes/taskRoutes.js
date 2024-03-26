const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().populate("projectId", "name");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single task
router.get("/:id", getTask, (req, res) => {
  res.json(res.task);
});

// Create a task
router.post("/", async (req, res) => {
  const task = new Task({
    projectId: req.body.projectId,
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    assignee: req.body.assignee,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
router.patch("/:id", getTask, async (req, res) => {
  if (req.body.projectId != null) {
    res.task.projectId = req.body.projectId;
  }
  if (req.body.name != null) {
    res.task.name = req.body.name;
  }
  if (req.body.description != null) {
    res.task.description = req.body.description;
  }
  if (req.body.status != null) {
    res.task.status = req.body.status;
  }
  if (req.body.assignee != null) {
    res.task.assignee = req.body.assignee;
  }
  if (req.body.startDate != null) {
    res.task.startDate = req.body.startDate;
  }
  if (req.body.endDate != null) {
    res.task.endDate = req.body.endDate;
  }

  try {
    const updatedTask = await res.task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete("/:id", getTask, async (req, res) => {
  try {
    await Task.findByIdAndDelete(res.task._id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a single task by ID
async function getTask(req, res, next) {
  let task;
  try {
    task = await Task.findById(req.params.id).populate("projectId", "name");
    if (task == null) {
      return res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.task = task;
  next();
}

module.exports = router;
