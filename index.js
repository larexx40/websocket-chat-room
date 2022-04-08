const express = require('express')
const websocket = require('ws').Server;
const http = require('http');

const app = express()
const server = http.createServer(app);
const wss = new websocket({server: server});

wss.on("connection", (ws)=>{
    console.log("A new client connected!!!");
    ws.send("Welcome new CLient");
    ws.on("message", (message)=>{
        console.log("Received Message ", message);
        ws.send(`Got your message ${message}`);
    })
})


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(3000 , ()=> {
    console.log('> Server is up and running on port : ' + 3000)
});