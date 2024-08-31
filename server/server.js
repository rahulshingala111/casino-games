const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http')
const SocketIO = require("socket.io");
require('dotenv').config();

const server = http.createServer(app);
const io = SocketIO(server, {
    cors: {
        methods: ["GET", "POST"]
    }
})

app.use(express.json());
app.use(cors());

let online_user = 0;
io.on('connection', (socket) => {
    online_user++;
    console.log("connection established");

    io.emit('online_user', online_user);

    socket.on('disconnect', () => {
        online_user--;
        io.emit("online_user", online_user)
    })

})


app.get('/ping', (req, res) => {
    res.send('pong')
})
app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('pong')
})

const PORT = process.env.PORT | 8080;
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})