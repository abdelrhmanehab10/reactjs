import React from "react";
const Reminders = ({ reminders, setReminders }) => {
  return (
    <div className="reminders" style={{ margin: "1rem 0" }}>
      {reminders.length ? (
        reminders.map((reminder) => {
          return (
            <div
              key={reminder.name}
              className="reminder"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                margin: "1rem 0",
              }}
            >
              <img
                src={reminder.image}
                alt=""
                style={{ borderRadius: "50%", width: "65px", height: "65px", objectFit:'cover' }}
              />
              <div className="name-age">
                <p style={{ fontWeight: "bold" }}>{reminder.name}</p>
                <p>{reminder.age}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>- There's no reminder</p>
      )}
      <button
        type="button"
        style={{
          width: "100%",
          fontSize: "18px",
          border: "none",
          backgroundColor: "#f28ab2",
          padding: ".5rem 0",
          borderRadius: ".2rem",
          color: "#fff",
          marginTop: "1rem",
        }}
        onClick={() => setReminders([])}
      >
        Remove All
      </button>
    </div>
  );
};

export default Reminders;
