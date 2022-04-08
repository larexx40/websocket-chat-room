const express = require('express')
const websocket = require('ws');
const http = require('http');

const app = express()
const server = http.createServer(app);
const wss = new websocket.Server({server: server});

wss.getUniquID = ()=>{
    id=()=>{
        code = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return code + code + '-' + code
    }
}
wss.on("connection", (ws)=>{
    console.log("A new client connected!!!");
    ws.send("Welcome new CLient");

    //broadcast i.e send message to other connected clients
    ws.on("message", (message, isBinary)=>{
        console.log("Received Message ", message);
        wss.clients.forEach((client)=>{
            if(client !== ws && client.readyState === websocket.OPEN){
                client.send(message, {binary: isBinary})
            }
        } )
        ws.send(`Got your message ${message}`);
    });

    ws.onclose= ()=>{
        console.log(`CLient ${ws.id} has disconnected!!!`);
    }

})


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


server.listen(3000 , ()=> {
    console.log('> Server is up and running on port : ' + 3000)
});