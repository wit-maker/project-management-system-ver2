const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
    console.log(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single project
router.get("/:id", getProject, (req, res) => {
  res.json(res.project);
});

// Create a project
router.post("/", async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a project
router.patch("/:id", getProject, async (req, res) => {
  if (req.body.name != null) {
    res.project.name = req.body.name;
  }
  if (req.body.description != null) {
    res.project.description = req.body.description;
  }
  if (req.body.status != null) {
    res.project.status = req.body.status;
  }
  if (req.body.startDate != null) {
    res.project.startDate = req.body.startDate;
  }
  if (req.body.endDate != null) {
    res.project.endDate = req.body.endDate;
  }

  try {
    const updatedProject = await res.project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a project
router.delete("/:id", getProject, async (req, res) => {
  try {
    await Project.findByIdAndDelete(res.project._id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a single project by ID
async function getProject(req, res, next) {
  let project;
  try {
    project = await Project.findById(req.params.id);
    if (project == null) {
      return res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.project = project;
  next();
}

module.exports = router;
