import { Route, Routes, } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import Group from "../pages/Group/Group";


export const Routerss = () => {
  return (
    <>
      <Routes>
        <Route path="/groupe" element={<Group />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </>
  );
};
