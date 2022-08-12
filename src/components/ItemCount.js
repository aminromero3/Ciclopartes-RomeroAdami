import React from "react";

const ItemCount = ({ stock, initial, onAdd, onRemove }) => {
    stock = 5;
    initial = 1;

    const [count, setCount] = React.useState(initial);

    onAdd = () => {
        if (stock === 0 || count === stock) {
            console.log("No se puede incrementar");
        } else {
            setCount(count + 1);
            console.log("incrementando");
            console.log(count);
        }
    };

    onRemove = () => {
        if (count === 0) {
            console.log("No se puede decrementar");
        } else {
            setCount(count - 1);
            console.log("decrementando");
            console.log(count);
        }
    };

    return (
        <div className="container d-flex borde">
            <button className="btn btn-outline-secondary" onClick={onRemove}>-</button>
            <p className="m-2">cantidad: {count}</p>
            <button className="btn btn-outline-secondary" onClick={onAdd}>+</button>
        </div>
    );
};

export default ItemCount;
