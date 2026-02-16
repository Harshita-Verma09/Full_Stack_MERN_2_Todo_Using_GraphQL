// /home/harshita-verma/Documents/GraphQL_Practice/1. Todo_Graphql/backend/src/models/Task.js


const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        requires: true
    },

    completed: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);