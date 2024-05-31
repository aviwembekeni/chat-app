import { Routes, Route } from "react-router-dom";

import React from "react";
import "./App.css";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Register from "./routes/register/register.component";
import SignIn from "./routes/sign-in/sign-in.component";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
