import React from "react";
  import styles from "../styles/Checkout.module.css";

  export default function Checkout({ items, total, onRemove }) {
      if (!items) return null;

      return ( (
          <div className={styles.checkouth2>Order Summary</h2>
              <ul>
                  {items.map((it, i) => (
                      <li key={i}>
                          {it.name} x{it.quantity} - ${(it.price * it.quantity).toFixed(2)}
                          <button className={styles.remove} onClick={() => onRemove(i)}>
                              Remove
                          </button>
                      </li>
                 ul>
              <h3>Total: ${total.toFixed(2)}</h3>
          </div>
      ));
  }