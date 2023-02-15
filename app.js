import express from "express"
import { getTranscript, testController } from "./src/index.js"
import cors from "cors"
import { orderCall, orderChat } from "./data/index.js"

const app = express()
const port = 9000

app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:5001",
        "http://localhost"
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
}))

const server = app.listen(port, function () {
    console.log("Listening at port %s", server.address().port)
})

    app
        .route('/')
        .get(
            (req, res) => {
                //TODO: менять orderChat и orderCall
                // const data = getTranscript(orderChat, 'chat')
                const data = getTranscript(orderCall, 'call')
                res.status(200).json(
                    data
                )
            }
        )

    app
        .route('/test')
        .get(
            (req, res) => {
                //TODO: менять orderChat и orderCall
                // const data = getTranscript(orderChat, 'chat')
                const data = testController()
                res.status(200).json(
                    data
                )
            }
        )



