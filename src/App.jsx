<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssetDetail from "./pages/AssetDetail.jsx";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/asset/:id" element={<AssetDetail />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
>>>>>>> 085dd514a182fa4504af1c2b26bf63b2911d5862
  );
}

export default App;
