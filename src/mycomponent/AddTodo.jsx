import React from "react";
import { useState } from "react";
function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo( title, description );
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            todo
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            id="description"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
