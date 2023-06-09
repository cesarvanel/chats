import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Profile from "./components/profile/profile";
import Group from "./pages/Group/Group";
import Contact from "./pages/Contact/Contact";
import { ProtectedRoute } from "./routes/protectedRoute";
import WelcomePage from "./pages/WelcomePage/WelcomePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />}>
            <Route path="/groupe" element={<Group />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="*" element={<div>Not found Route</div>} />
      </Routes>
    </div>
  );
}

export default App;
