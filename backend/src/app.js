const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const projectsRouter = require("./routes/projectRoutes");
const tasksRouter = require("./routes/taskRoutes");
const usersRouter = require("./routes/userRoutes");

app.use("/api/projects", projectsRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
