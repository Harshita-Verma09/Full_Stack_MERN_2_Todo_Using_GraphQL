import React from "react";
import { useMutation } from "@apollo/client/react";
import { DELETE_TASK, MARK_COMPLETE, GET_TASKS } from "../graphql/queries";

function TaskItem({ task }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const [markComplete] = useMutation(MARK_COMPLETE, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  return (
    <div className="task">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      {!task.completed && (
        <button
          onClick={() =>
            markComplete({
              variables: { id: task.id },
            })
          }
        >
          Complete
        </button>
      )}

      <button
        onClick={() =>
          deleteTask({
            variables: { id: task.id },
          })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
