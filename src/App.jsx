import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Erro404 from "./pages/mistakes/Erro404";
import Details from "./pages/Details";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/*" element={<Erro404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
