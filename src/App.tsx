import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Accueil from "./pages/Accueil";
import Sidebar from "./components/Sidebar/Sidebar";
import Unauthorized from "./pages/Unauthorized";
import RoleProtectedRoute from "./utils/RoleProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          element={<RoleProtectedRoute allowedRoles={["CHEF_DE_SERVICE"]} />}
        >
          <Route path="/accueil" element={<Accueil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
