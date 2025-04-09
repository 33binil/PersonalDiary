import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// If you're using AOS (Animate On Scroll), you can initialize it here:
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000, once: false });

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
