import React from "react";
import "./myStyle.css";
import styles from "./syle.module.css";
function Stylesheet(props) {
  const className = props.primary ? "primary" : "";
  return (
    <div>
      <h className={`${className} font-xl`}>Stylesheet</h>
      <h1 className={styles.font}>danger</h1>
    </div>
  );
}

export default Stylesheet;
