import { Routes, Route } from "react-router-dom";
import { MessageCard } from "../../component/card/message/messageCard";

import { HomePageMediator } from "../../page";

const ApplicationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageMediator />} />
      <Route path="about" element={<div>ABOUT</div>} />
      <Route
        path="*"
        element={<MessageCard icon="error" text="Bar" title="Foo" />}
      />
    </Routes>
  );
};

export { ApplicationRouter };
