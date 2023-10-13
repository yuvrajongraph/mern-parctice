import "./App.css";
import React from "react";
import Todo from "./components/Todo/Todo";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import FoodDelivery from "./components/FoodDelivery/FoodDelivery";
import Fitness from "./components/Fitness/Fitness";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { useAuth, Authenticated } from "./contexts/Auth/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/todo" element={<Authenticated><Todo /></Authenticated>} />
            <Route path="/food" element={<Authenticated><FoodDelivery /></Authenticated>} />
            <Route path="/fitness" element={<Authenticated><Fitness /></Authenticated>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
