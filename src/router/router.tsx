import { Routes, Route } from "react-router-dom";

import { HomePageMediator } from "../page/home/homePageMediator";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageMediator />} />
      <Route path="about" element={<div>ABOUT</div>} />
    </Routes>
  );
};

export { Router };
