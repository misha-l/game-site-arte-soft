import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/layout/Header/Header.js";
import Footer from "../components/layout/Footer/Footer.js";

const Home = lazy(() => import("../components/pages/Home/Home"));
const About = lazy(() => import("../components/pages/About/About"));
const NotFound = lazy(() => import("../components/pages/NotFound/NotFound"));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </Suspense>
  </Router>
);

export default AppRouter;
