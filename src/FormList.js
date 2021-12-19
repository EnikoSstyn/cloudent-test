import React, { useState } from "react";
export default function FormList({ fieldName, id, handleEdit }) {
  const [text, setText] = useState(false);

  const handleOnClick = (e) => {
    if (e.target.value === "yes") {
      setText(true);
    } else {
      setText(false);
    }
  };
  return (
    <div className="list">
      <div className="boolean">
        <h5>{fieldName}</h5>
        <div className="toggle">
          <input
            type="radio"
            name={id}
            value="yes"
            id={`${id}yes`}
            onChange={handleOnClick}
          />
          <label htmlFor={`${id}yes`}>Yes</label>
          <input
            type="radio"
            name={id}
            value="no"
            id={`${id}no`}
            onChange={handleOnClick}
          />
          <label htmlFor={`${id}no`}>No</label>
        </div>
        {!text && (
          <i
            className="bi bi-pencil-fill icon"
            data-id={id}
            onClick={handleEdit}
            data-name="edit"
          ></i>
        )}
      </div>
      {text && (
        <div className="textInput">
          <textarea
            id="text"
            name="text"
            placeholder="Ha igen, milyen márkája cipőket szokott hordani?"
            cols="30"
            rows="5"
          />
          <i
            className="bi bi-pencil-fill icon"
            data-id={id}
            onClick={handleEdit}
          ></i>
        </div>
      )}
    </div>
  );
}
