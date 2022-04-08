$(function (){
    const clientID ='';

    let wsClient = new WebSocket('ws://localhost:3000');

    //connection opened
    wsClient.onopen = ()=>{
        console.log("Connected to Server");
    }

    //send message to server
    wsClient.send(messageBox.value);

    //Listen for messages
    wsClient.onmessage = ({data})=>{
        showMessage(`Incoming: ${data}`);
    }

    wsClient.onclose =()=>{
        console.log("Client Disconnected");
    }

})