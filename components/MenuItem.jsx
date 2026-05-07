import React from "react";
  import styles from "../styles/MenuItem.module.css";

  export default function MenuItem({ item, onAdd }) {
      return (div className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <h2>{item.name}</h2p>${item.price.toFixed(2)}</pbutton className={styles.button} onClick={onAdd}>
                  Add
              </button>
          </div>
      ));
  }