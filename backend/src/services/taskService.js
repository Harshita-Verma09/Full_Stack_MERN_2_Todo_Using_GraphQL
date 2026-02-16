///home/harshita-verma/Documents/GraphQL_Practice/1. Todo_Graphql/backend/src/services/taskService.js

const Task = require("../models/Task");

exports.getTasks = async (status) => {
    try {
        if (status !== undefined) {
            return await Task.find({ complete: status });
        }
        return await Task.find().sort({ createdAt: -1 });
    } catch (err) {
        throw new Error(err);
    }
};


exports.createTask = async (title) => {
    try {
        return await Task.create({ title })
    } catch (err) {
        throw new Error(err);
    }
};

exports.updateTask = async (id, title) => {
    try {
        return await Task.findByIdAndUpdate(
            id,
            { title },
            { new: true }
        );
    }
    catch (err) {
        throw new Error(err);
    }
};

exports.deleteTask = async (id) => {
    try {
        await Task.findByIdAndDelete(id);
        return "Task deleted Successfully";
    }
    catch (err) {
        throw new Error(err);
    }
};

exports.markComplete = async (id) => {
    return await Task.findByIdAndUpdate(
        id,
        { completed: true },
        { new: true }
    )
};