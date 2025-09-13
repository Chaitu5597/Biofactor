import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import CategoryCards from "./Components/micro_home/CategoryCards"; // ✅ Import it

// Lazy load Home
const Home = lazy(() => import("./Pages/Home"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "20%" }}>
            <h1>Loading...</h1>
            <Spinner animation="border" variant="primary" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category-cards" element={<CategoryCards />} /> 
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
