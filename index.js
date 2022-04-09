const express = require('express')
const websocket = require('ws');
const http = require('http');
const path = require('path');

const app = express()

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const wss = new websocket.Server({server: server});

wss.getUniqueID= ()=>{
        num = Math.floor((1 + Math.random()) * 0x1000).toString().substring(1);
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for ( var i = 0; i <=3; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result + num;
}

wss.on("connection", (ws)=>{
    ws.id = wss.getUniqueID();
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

   res.render('index.ejs');

})


server.listen(3000 , ()=> {
    console.log('> Server is up and running on port : ' + 3000)
});