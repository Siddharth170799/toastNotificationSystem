import React, { useEffect, useState } from "react";

const Toast = ({ title, message, duration, type, position, display }) => {
  const [display1, setDisplay1] = useState(display);
  useEffect(() => {
    setTimeout(() => {
      setDisplay1(false);
    }, duration);
  }, []);

  return (
    <>
      {display1 && (
        <div className={`toast-box ${position}`}>
          <div className={`toast ${type}`}>
            <strong>{title}</strong>
            <p>{message}</p>
          </div>
          <button className="close-btn" onClick={() => setDisplay1(false)}>
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default Toast;
/// title,message,type colour,input range according to the timer
