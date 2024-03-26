import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/templates/Layout";
import ProjectListPage from "./components/pages/ProjectListPage";
import ProjectDetailsPage from "./components/pages/ProjectDetailsPage";
import TaskListPage from "./components/pages/TaskListPage";
import TaskDetailsPage from "./components/pages/TaskDetailsPage";
import TaskGanttTemplate from "./components/templates/TaskGanttTemplate";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProjectListPage />} />
            <Route path="projects/:id" element={<ProjectDetailsPage />} />
            <Route path="tasks" element={<TaskListPage />} />
            <Route path="tasks/:id" element={<TaskDetailsPage />} />
            <Route path="tasks/gantt" element={<TaskGanttTemplate />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
