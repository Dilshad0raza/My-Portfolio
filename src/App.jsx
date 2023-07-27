import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./Component/Nav";
import Section from "./Component/Section";
import Education from "./Component/Education";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

import React from "react";
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Section/>}></Route>
                <Route path="/Education" element={<Education/>}></Route>
                <Route path="/Project" element={<Project/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}
export default App;