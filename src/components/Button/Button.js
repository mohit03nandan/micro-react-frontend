import React from 'react'
import { createSearchParams, useNavigate} from "react-router-dom";
import styles from "./Button.module.css";

const Button = () => {
  const navigate = useNavigate();

  function onSuffle(event) {
    
    if (event.target.value === "true" || event.target.value === "false") {
        navigate({
            search: createSearchParams({
              shuffle  : event.target.value,
            }).toString(),
        });
    }
}


  return (
    <div >
        <button onClick={onSuffle} name="shuffle" value="false" type="button" className="btn btn-warning btn-lg"  class={styles.Buttons}>
             Suffle
        </button>
    </div>
  )
}

export default Button