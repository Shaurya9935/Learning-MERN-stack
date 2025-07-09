// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title: "Hey First todo", desc: "Description of ths todo", isDone: false, days : Math.floor(Math.random() * 45 + 5*Math.random()) })
    todo.save()
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})