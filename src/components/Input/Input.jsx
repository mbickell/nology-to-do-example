import React from "react";
import styles from "./Input.module.scss";

const Input = props => {
  const { type, placeholder, updateState, state } = props;

  return (
    <>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={e => updateState(e.target.value)}
        value={state}
      />
    </>
  );
};

export default Input;
