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
    if (startDate < endDate && name && description && startDate && endDate && image) {
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
        });
    } else {
      alert("Ensure end date is later than start date and all form fields are filled out");
    }
  };

  return (
    <div className={styles.form}>
      <Input type="text" placeholder="Name of Activity" updateState={setName} />
      <Input type="text" placeholder="Description of Activity" updateState={setDescription} />
      <Input type="date" placeholder="" updateState={setStartDate} />
      <Input type="date" placeholder="" updateState={setEndDate} />
      <Input type="text" placeholder="Image" updateState={setImage} />
      <button onClick={submitToDo}>Submit To-Do</button>
    </div>
  );
};

export default Form;
