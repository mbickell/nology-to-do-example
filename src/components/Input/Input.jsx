import React from "react";
import styles from "./Input.module.scss";

const Input = props => {
  const { type, placeholder, updateState } = props;

  return (
    <>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={e => updateState(e.target.value)}
      />
    </>
  );
};

export default Input;
