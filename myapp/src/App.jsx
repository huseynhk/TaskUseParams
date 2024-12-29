import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router";
import Home from "./components/Home";
import Addition from "./components/Addition";
import Division from "./components/Division";
import Multiplication from "./components/Multiplication";
import Subtraction from "./components/Subtraction";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home/>} />
        <Route path={ROUTER.Addition + "/:num1/:num2"} element={<Addition />} />
        <Route path={ROUTER.Division + "/:num1/:num2"} element={<Division />} />
        <Route path={ROUTER.Multiplication + "/:num1/:num2"} element={<Multiplication />} />
        <Route path={ROUTER.Subtraction + "/:num1/:num2"} element={<Subtraction />} />
      </Routes>
    </>
  );
}

export default App;
