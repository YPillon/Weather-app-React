import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import SevenDaysPage from "./components/SevenDayPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <React.StrictMode>
            <App />
          </React.StrictMode>
        }
      />
      <Route path="sevendays">
        <Route path=":location/:countryCode" element={<SevenDaysPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
