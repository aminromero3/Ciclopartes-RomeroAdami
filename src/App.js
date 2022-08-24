import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import CustomProvider from "./CartContext";


function App() {
    return (
        <>
            <BrowserRouter>
                <CustomProvider>
                    <Header />
                    <Main />
                    <Footer />
                </CustomProvider>
            </BrowserRouter>
        </>

    )
}

export default App;