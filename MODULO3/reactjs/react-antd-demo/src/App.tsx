import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import AntNavbar from "./components/antd/AntNavbar";
import AntFooter from "./components/antd/AntFooter";
import HomeAntd from "./pages/HomeAntd";
import AboutAntd from "./pages/AboutAntd";

export default function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <AntNavbar />

        <Routes>
          <Route path="/" element={<HomeAntd />} />
          <Route path="/about" element={<AboutAntd />} />
        </Routes>

        <AntFooter />
      </Layout>
    </BrowserRouter>
  );
}