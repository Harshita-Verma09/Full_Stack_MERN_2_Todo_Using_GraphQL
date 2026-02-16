const taskServices = require("../services/taskService");

const resolvers = {
    Query: {
        tasks: async (__, { status }) => {
            return await taskServices.getTasks(status);
        },
    },
    Mutation: {
        createTask: async (_, { title }) => {
            return await taskServices.createTask(title);
        },
        updateTask: async (_, { id, title }) => {
            return await taskServices.updateTask(id, title);
        },
        deleteTask: async (_, { id }) => {
            return await taskServices.deleteTask(id);
        },
        markComplete: async (_, { id }) => {
            return await taskServices.markComplete(id);
        }
    },
}
module.exports = resolvers;