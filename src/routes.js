import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import User from "./pages/User";

export default function Routesx() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<User />}/>
                <Route path="/create" component={Profile}/>
                <Route path="/update/:id" component={Profile}/>
            </Routes>
        </BrowserRouter>
    );
}