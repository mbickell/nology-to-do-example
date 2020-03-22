import React, { useState } from "react";
import styles from "./Form.module.scss";
import { firestore } from "../../firebase";

import Input from "../../components/Input";

const Form = ({ fetchData }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState("");

  const submitToDo = () => {
    if (startDate < endDate && name && description && startDate && endDate) {
      firestore
        .collection("todos")
        .doc()
        .set({
          name: name,
          description: description,
          startDate: startDate,
          endDate: endDate,
          image: image
        })
        .then(() => {
          fetchData();
          resetForm();
        });
    } else {
      alert("Ensure end date is later than start date and all form fields are filled out");
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setImage("");
  };

  return (
    <div className={styles.form}>
      <Input type="text" placeholder="Name of Activity" state={name} updateState={setName} />
      <Input type="text" placeholder="Description of Activity" state={description} updateState={setDescription} />
      <label>Start Date:</label>
      <Input type="date" placeholder="" state={startDate} updateState={setStartDate} />
      <label>End Date:</label>
      <Input type="date" placeholder="" state={endDate} updateState={setEndDate} />
      <Input type="text" placeholder="Image (optional)" state={image} updateState={setImage} />
      <input className={styles.button} type="submit" onClick={submitToDo} />
    </div>
  );
};

export default Form;
