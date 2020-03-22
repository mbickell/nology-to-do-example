import React, { useState, useEffect } from "react";
import { firestore } from "./firebase";
// import styles from "./App.module.scss";

//containers
import Form from "./containers/Form";
import CardList from "./containers/CardList";

// Components

const App = () => {
  const [todos, setTodos] = useState([{}]);

  const fetchData = () => {
    firestore
      .collection("todos")
      .get()
      .then(docs => {
        const todos = [];
        docs.forEach(doc => {
          todos.push({ ...doc.data(), id: doc.id });
        });
        setTodos(todos);
      });
  };

  const deleteTodo = id => {
    firestore
      .collection("todos")
      .doc(id)
      .delete()
      .then(() => {
        fetchData();
        alert("Todo deleted");
      })
      .catch(error => {
        alert(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Form fetchData={fetchData} />
      <CardList data={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
