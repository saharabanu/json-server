const { videos, tags } = require("./db_videos.json");
const {transactions} = require('./db_transactions.json');
const {todos} = require("./db_todos.json")

module.exports = {
    videos,
    tags,
    transactions,
    todos

};
