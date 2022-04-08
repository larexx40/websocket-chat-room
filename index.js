const express = require('express')
const websocket = require('ws');
const http = require('http');

const app = express()
const server = http.createServer(app);
const wss = new websocket.Server({server: server});

wss.getUniquID = ()=>{
    id=()=>{
        code = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        code1 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        code2 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    
        return code + code1 + '-' + code2
    }
}
wss.on("connection", (ws)=>{
    ws.id = wss.getUniquID();
    console.log("New client connected with id: ", ws.id);
    ws.send("Welcome new CLient");

    //broadcast i.e send message to other connected clients
    ws.on("message", (message)=>{
        console.log(`Client ${ws.id}: ${message}`);
        wss.clients.forEach((client)=>{
            if(client !== ws && client.readyState === websocket.OPEN){
                client.send(message)
            }
        } )
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