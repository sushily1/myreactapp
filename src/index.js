import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./output.css";
import "./css/style.css";
import Myiconpage from "./pages/Myiconpage";
import About, { About2, About3 } from "./pages/About";
import Service from "./pages/Service";
import Bootstrappage from "./Bootstrappage";
import { BrowserRouter, Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Myiconpage/>
    <About />
    <About2 />
    <About3 />
    <Service />
    <Bootstrappage /> */}
    <BrowserRouter>
    <Routes>
      <Route path='' element={<page></page>}></Route>
      <Route path='about' element={<About/>}></Route>
       <Route path='*' element={<h1>404 page</h1>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
