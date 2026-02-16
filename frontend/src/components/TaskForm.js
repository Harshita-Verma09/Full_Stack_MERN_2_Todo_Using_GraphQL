import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_TASK, GET_TASKS } from "../graphql/queries";

function TaskForm() {
  const [title, setTitle] = useState("");

  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await createTask({ variables: { title } });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
