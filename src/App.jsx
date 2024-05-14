import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
/* import { TransitionGroup, CSSTransition } from "react-transition-group"; */
import { Toaster } from "react-hot-toast";

import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
              <Routes location={location}>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/dashboard" element={ <Dashboard />} />
              </Routes>
        </main>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
