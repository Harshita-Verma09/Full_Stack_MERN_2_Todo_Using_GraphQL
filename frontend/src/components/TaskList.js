import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_TASKS } from "../graphql/queries";
import TaskItem from "./TaskItem";

function TaskList({ status }) {
  const { data, loading, error } = useQuery(GET_TASKS, {
    variables: status === null ? {} : { status },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {data.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
