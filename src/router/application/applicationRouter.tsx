import { Routes, Route } from "react-router-dom";

import { HomePageMediator } from "../../page";

const ApplicationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageMediator />} />
      <Route path="about" element={<div>ABOUT</div>} />
    </Routes>
  );
};

export { ApplicationRouter };
