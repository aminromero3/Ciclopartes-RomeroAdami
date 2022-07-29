import React from "react";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
        <>
            <Header />
            <main>
                <h1>Ciclopartes</h1>
                <ItemListContainer />
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </>

    )
}

export default App;