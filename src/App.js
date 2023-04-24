import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Characters from "./views/Characters";
import Comics from "./views/Comics";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
