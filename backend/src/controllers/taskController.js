const Task = require("../models/task");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("projectId", "name")
      .populate("assignee", "name");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate("projectId", "name")
      .populate("assignee", "name");
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  const {
    projectId,
    name,
    description,
    status,
    assignee,
    startDate,
    endDate,
    dependencies,
    estimatedDuration,
  } = req.body;

  try {
    const newTask = new Task({
      projectId,
      name,
      description,
      status,
      assignee,
      startDate,
      endDate,
      dependencies,
      estimatedDuration,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const {
    name,
    description,
    assignee,
    projectId,
    status,
    startDate,
    endDate,
    dependencies,
    estimatedDuration,
    actualDuration,
  } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        assignee,
        projectId,
        status,
        startDate,
        endDate,
        dependencies,
        estimatedDuration,
        actualDuration,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
