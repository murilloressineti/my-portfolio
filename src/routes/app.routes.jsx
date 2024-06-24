import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { AboutMe } from "../pages/AboutMe";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mim" element={<AboutMe />} />
    </Routes>
  );
}
