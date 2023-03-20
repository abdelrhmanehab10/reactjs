import React, { useState } from "react";
const Form = ({ setReminders, reminders }) => {
  const [birthReminder, setBirthReminder] = useState({});

  const getData = (e) => {
    let data = { ...birthReminder };
    data[e.target.name] = e.target.value;
    setBirthReminder(data);
  };

  const pushReminder = () => {
    let data = [...reminders];
    data.push(birthReminder);
    setReminders(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    pushReminder();
    e.target.userName.value = "";
    e.target.userAge.value = "";
    e.target.userImage.value = "";
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      onSubmit={submitHandler}
    >
      <label htmlFor="userName" style={{ marginBottom: ".5rem" }}>
        name :
      </label>
      <input
        type="text"
        id="userName"
        name="name"
        style={{ padding: ".5rem .2rem", marginBottom: ".5rem" }}
        onChange={getData}
      />
      <label htmlFor="userAge" style={{ marginBottom: ".5rem" }}>
        age :
      </label>
      <input
        type="number"
        id="userAge"
        name="age"
        style={{ padding: ".5rem .2rem", marginBottom: ".5rem" }}
        onChange={getData}
      />
      <label htmlFor="userImage" style={{ marginBottom: ".5rem" }}>
        image URL :
      </label>
      <input
        id="userImage"
        name="image"
        type="text"
        style={{ padding: ".5rem .2rem", marginBottom: ".5rem" }}
        onChange={getData}
      />
      <button
        type="submit"
        style={{
          border: "none",
          fontSize: "18px",
          backgroundColor: "#f28ab2",
          padding: ".5rem 0",
          borderRadius: ".2rem",
          color: "#fff",
          marginTop: "1rem",
        }}
      >
        Add Item
      </button>
    </form>
  );
};

export default Form;
