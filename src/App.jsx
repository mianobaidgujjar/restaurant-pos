
  import React, { useState } from "react";
  import MenuItem from "./components/MenuItem";
  import Checkout from "./components/Checkout";

  const menu = [
    { id: 1, name: "Burger", price: 10.99, image: "https://via.placeholder.com/150?text=Burger" },
    { id: 2, name: "Fries", price: 3.99, image: "https://via.placeholder.com/150?text=Fries" },
    { id: 3, name: "Soda", price: 1.99, image: "https://via.placeholder.com/150?text=Soda" },
  ];

  export default function App() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item) => {
      setItems([...items, { ...item, quantity: 1 }]);
      setTotal((t) => t + item.price);
    };

    const removeItem = (index) => {
      const removed = items[index];
      setItems(items.filter((_, i) => i !== index));
      setTotal((t) => t - removed.price);
    };

    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Restaurant POS</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {menu.map((it) => (
            <MenuItem key={it.id} item={it} onAdd={() => addItem(it)} />
          ))}
        </div>
        <Checkout items={items} total={total} onRemove={removeItem} />
      </div>
    );
  }
