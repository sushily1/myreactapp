import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/style.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Applogin from "./modules/apps/appauth/Applogin";
import Welcomepage from "./modules/Welcomepage";
import Userlogin from "./modules/users/auth/Userlogin";
import Landingpage from "./modules/dashboard/Landingpage";
import Errorpage from "./modules/sharecomonents/Errorpage";
import Usermainpage from "./modules/users/components/Usermainpage";
import Userreports from "./modules/users/components/Userreports";
import Appdata from "./modules/features/Appdata";
import UserDetails from "./modules/features/UserDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Applogin />} />

        <Route path="/applist" element={<Welcomepage />} />
    
        <Route path="/users" element={<Userlogin />} />

        <Route path="/dashboard" element={<Landingpage />}>
          
          <Route index element={<Usermainpage />} />

          <Route path="reports" element={<Userreports />} />

          <Route path="users" element={<Appdata />}>
            
            <Route path="userdetails/:id" element={<UserDetails />} />

            <Route path="*" element={<Errorpage />} />
          </Route>

          <Route path="*" element={<Errorpage />} />
        </Route>

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)