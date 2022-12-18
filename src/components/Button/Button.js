import React from 'react'
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div >
        <button type="button" className="btn btn-warning btn-lg"  class={styles.Buttons}>
             Large button
        </button>
    </div>
  )
}

export default Button