import "tailwindcss/tailwind.css";

//TODO: Misto importu z tailwind tady dát css soubor a zkusit tam měnit --heading-font-size-adjust na .radix-themes
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
