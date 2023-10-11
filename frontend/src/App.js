import "./App.css";
import React from "react";
import Todo from "./components/Todo/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import FoodDelivery from "./components/FoodDelivery/FoodDelivery";
import Fitness from "./components/Fitness/Fitness";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Authentication />} />
          <Route path="/food" element={<FoodDelivery />} />
          <Route path="/fitness" element={<Fitness />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
