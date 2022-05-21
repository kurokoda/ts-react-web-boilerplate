import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>HOME</div>} />
      <Route path="about" element={<div>ABOUT</div>} />
    </Routes>
  );
};

export { Router };
