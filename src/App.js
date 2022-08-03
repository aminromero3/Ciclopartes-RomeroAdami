import React from "react";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";


function App() {
    return (
        <>
            <Header />
            <main>
                <h1>Ciclopartes</h1>
                <ItemListContainer greeting={"Amin"}  />
            </main>
            <footer>
                <Footer />
            </footer>
        </>

    )
}

export default App;