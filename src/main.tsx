import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Content } from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Changes } from "./pages/Changes";
import PricingPage from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DownloadPage from "./pages/DownloadPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <App />
              <Content />
            </>
          }
        />
        <Route path="/changelog" element={<Changes />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<Terms />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
