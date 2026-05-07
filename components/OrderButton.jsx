import React from "react";

  export default function OrderButton() {
      return (
          <button style={{ margin: "10px", padding: "8px 12px", backgroundColor: "#4CAF50", color: "white", border:
  none, borderRadius: "4px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>
              {new Image({ src: "https://via.placeholder.com/20?text=Order" }).complete ? "Order" : (new Image({ src:
  "https://via.placeholder.com/20?text=Order" }), "Ordering...")}
  button>
      );
  }