const { gql } = require("graphql-tag");

const typeDefs = gql`
    type Task{
        id: ID!
        title: String!
        completed:Boolean!
        createdAt: String
        updatedAt: String
    }

    type Query{
        tasks(status: Boolean): [Task]
    }

    type Mutation{
        createTask(title:String!):Task
        updateTask(id:ID!, title:String!): Task
        deleteTask(id:ID!): String
        markComplete(id:ID!): Task
    }
`;

module.exports = typeDefs;