import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout";
import HomePage from "../src/pages/HomePage";
import Currencies from "../src/pages/Currencies";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="currencies" element={<Currencies/>} />
      </Route>
    </Routes>
  );
}