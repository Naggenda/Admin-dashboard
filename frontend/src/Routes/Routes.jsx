import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Components/Register";
import Home from "../views/Home";
import LoanApplication from "../views/LoanForm/LoanApplication";
import Sidebar from "../Layout/SideBar/Sidebar";
import UserAccounts from "../views/UserAccounts/UserAccounts";
import NewUser from "../views/UserAccounts/NewUser";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div className="navbar-fixed">
          <Sidebar />
          {/* <Navbar /> */}
        </div>
        <div className="mt-5 pl-5">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/loanApplication" element={<LoanApplication />} />
            <Route path="/accounts" element={<UserAccounts />} />
            <Route path="/create" element={<NewUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
