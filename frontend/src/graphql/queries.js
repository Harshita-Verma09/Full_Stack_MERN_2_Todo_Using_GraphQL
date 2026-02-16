import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks($status: Boolean) {
    tasks(status: $status) {
      id
      title
      completed
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($title: String!) {
    createTask(title: $title) {
      id
      title
      completed
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

export const MARK_COMPLETE = gql`
  mutation MarkComplete($id: ID!) {
    markComplete(id: $id) {
      id
      completed
    }
  }
`;
