import React, { useState } from "react";

import "./ToDoItem.css";

const ToDoItem = ({ item, onToggle, onDelete, OnUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    OnUpdate(item.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="ToDoItem d-flex justify-content-between gap-2 align-items-center mb-3 bg-dark border p-2 rounded-3 ">
      <div className="align-items-center d-flex ">
        <div className="position-relative contain w-auto">
          <input
            type="checkbox"
            className="default"
            checked={item.completed}
            onChange={() => onToggle(item.id)}
          />
          <span className="checkmark"></span>
        </div>
      </div>
      {isEditing ? (
        <textarea
          onChange={(e) => setNewText(e.target.value)}
          className="form-control text-white  fs-5 bg-dark rounded-2 ms-4"
          value={newText}
        ></textarea>
      ) : (
        <span
          className={
            item.completed
              ? "completed text-white-50  text-decoration-line-through fs-5 mx-3"
              : "text-white  fs-5 mx-3"
          }
        >
          {item.text}
        </span>
      )}
      <div className="d-flex gap-1">
        <button
          className="btn btn-danger text-white"
          onClick={isEditing ? handleSave : handleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="btn" onClick={() => onDelete(item.id)}>
          <i className="fa fa-trash text-danger"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
