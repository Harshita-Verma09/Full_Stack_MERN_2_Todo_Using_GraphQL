#  Todo Practice of GraphQL

A minimal full-stack **TODO app** using **GraphQL (Apollo Server) + MongoDB** on the backend and **React + Apollo Client** on the frontend.

---

##  Tech Stack

###  Backend
- Node.js  
- Express  
- Apollo Server  
- Mongoose  
- MongoDB  

###  Frontend
- React (Create React App)  
- Apollo Client  

###  GraphQL Endpoint
```
http://localhost:4000/graphql
```

---

# ⚡ Quick Start (Run Locally)

##  Clone the Repository

```bash
git clone <your-repo-url>
```

---

##  Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Start backend:

```bash
npm run dev
```

---

##  Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

##  Open the App

- Frontend → http://localhost:3000  
- GraphQL Playground → http://localhost:4000/graphql  

---

#  GraphQL API

##  Schema Overview

### Type

```graphql
type Task {
  id: ID!
  title: String!
  completed: Boolean!
  createdAt: String
  updatedAt: String
}
```

---

##  Queries

```graphql
tasks(status: Boolean): [Task]
```

---

##  Mutations

```graphql
createTask(title: String!): Task
updateTask(id: ID!, title: String!): Task
deleteTask(id: ID!): String
markComplete(id: ID!): Task
```

---

##  Example Query

### Get Tasks

```graphql
query GetTasks($status: Boolean) {
  tasks(status: $status) {
    id
    title
    completed
  }
}
```

---

## Create Task

```graphql
mutation CreateTask($title: String!) {
  createTask(title: $title) {
    id
    title
    completed
  }
}
```

---

##  Mark Complete

```graphql
mutation MarkComplete($id: ID!) {
  markComplete(id: $id) {
    id
    completed
  }
}
```

---

##  Delete Task

```graphql
mutation DeleteTask($id: ID!) {
  deleteTask(id: $id)
}
```

---

#  Project Structure

```
backend/
│── index.js               # Server entry
│── typeDefs.js            # GraphQL schema
│── resolvers.js           # Resolvers
│── Task.js                # Mongoose model
│── taskService.js         # DB logic
│── src/config/db.js       # MongoDB connection

frontend/
│── src/
│   ├── components/        # UI components
│   ├── graphql/queries.js # Client GraphQL operations
│── public/
│── package.json
```

---

#  Known Issues & Recommended Fixes

###  Fix Task schema typo

In `Task.js`

```js
requires: true
```

Change to:

```js
required: true
```

---

###  Fix Filter Field

In `taskService.js`

Change:

```js
{ complete: status }
```

To:

```js
{ completed: status }
```

---

###  Add Default Port

In `index.js`

```js
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

#  Features

- Create Tasks  
- Read Tasks  
- Update Tasks  
- Delete Tasks  
- Mark Task as Complete  
- Filter Tasks (Pending / Completed)  
- Apollo Client + GraphQL Data Flow  

---

# Contributing

Contributions are welcome!  
Feel free to open an issue or submit a PR.

---



⭐ If you like this project, consider giving it a star!
