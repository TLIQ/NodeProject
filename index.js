import express from "express"
import { orderCall, orderChat } from "./data/index.js"

const app = express()
const port = 9000

const server = app.listen(port, function () {
    console.log("Listening at port %s", server.address().port)
})

console.log(orderChat)