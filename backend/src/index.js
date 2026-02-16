///home/harshita-verma/Documents/GraphQL_Practice/1. Todo_Graphql/backend/src/index.js


require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");

const connectDB = require("./config/db");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const startServer = async () => {
    const app = express();

    connectDB();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();

    app.use(cors());
    app.use(express.json());
    app.use("/graphql", expressMiddleware(server));

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
};

startServer();


// npm run dev