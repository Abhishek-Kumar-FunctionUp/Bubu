import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Sorry from "./Sorry";
import SorryLetter from "./SorryLetter";
import ImSorry from "./ImSorry";
import Hope from "./Hope";
import Wish from "./Wish";
import ReallySorry from "./ReallySorry";
import Met from "./Met";
import Magic from "./Magic";
import Thank from "./Thank";
import Forgive from "./Forgive";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sorry" element={<Sorry />} />
      <Route path="/sorryletter" element={<SorryLetter />} />
      <Route path="/imsorry" element={<ImSorry />} />
      <Route path="/hope" element={<Hope />} />
      <Route path="/wish" element={<Wish />} />
      <Route path="/reallysorry" element={<ReallySorry />} />
      <Route path="/met" element={<Met />} />
      <Route path="/magic" element={<Magic />} />
      <Route path="/thank" element={<Thank />} />
      <Route path="/forgive" element={<Forgive />} />
    </Routes>
  );
}
