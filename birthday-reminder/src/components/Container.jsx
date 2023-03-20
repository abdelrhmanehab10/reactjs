import React, { useEffect, useState } from "react";
import Form from "./Form";
import Reminders from "./Reminders";
import { birthdayReminders } from "../dummy/birthdayReminders";

const Container = () => {
  const [reminders, setReminders] = useState([]);

  const data = () => {
    let data = [...birthdayReminders];
    setReminders(data);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#fff",
        width:'400px',
        padding: "2rem 1.5rem",
        margin: "auto",
      }}
    >
      <h3 style={{ fontSize: "28px", marginBottom: "2rem" }}>
        5 birthdays today
      </h3>
      <Form setReminders={setReminders} reminders={reminders} />
      <Reminders setReminders={setReminders} reminders={reminders} />
    </div>
  );
};

export default Container;
