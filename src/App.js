 import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./comp/Navbar/navbar"


import Home from "./pages/home"
import Mint from "./pages/MintPage/MintPage"
import NewsLetter from "./comp/newsLetter/newsLetter";
import Footer from "./comp/footer/footer"


const App= () => {
    return (
        
            
        <Router>

            <NavBar/>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route  path="/mint" element={<Mint />} />
                    
            </Routes>

            <div className={"Container"}>
                <NewsLetter></NewsLetter>
                <Footer></Footer>

            </div>
        </Router>
        
       
    )
}

export default App;