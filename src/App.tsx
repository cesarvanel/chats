import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Profile from "./components/profile/profile";
import Group from "./pages/Group/Group";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<HomePage />}>
          <Route path="/groupe" element={<Group />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path = "*" element={<div>Not found Route</div>}  />
      </Routes>
    </div>
  );
}

export default App;
