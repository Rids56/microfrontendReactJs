import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="container">
    <div>
      <Header />
        <h5>Products</h5>
        <p>Welcome to the Test MFE Page</p>
      <Footer />
    </div>
  </div>
);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)