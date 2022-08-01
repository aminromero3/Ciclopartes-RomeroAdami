import React from "react";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
    return (
        <>
            <Header />
            <main>
                <h1>Ciclopartes</h1>
                <ItemListContainer greeting={"Amin"}  />
            </main>
            <footer>
                <h2>Footer</h2>
                <NavBar 
                    type="footer" />
            </footer>
        </>

    )
}

export default App;