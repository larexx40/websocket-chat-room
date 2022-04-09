$(function (){
    if ("WebSocket" in window){
        const sendBtn = document.querySelector('#send');
        const messages = document.querySelector('#messages');
        const messageBox = document.querySelector('#messageBox');

        //displays the message on the screen(testArea)
        //and clears the textBox.
        showMessage= (message)=>{
            messages.textContent = `\n ${message}`;
            messages.scrollTop = messages.scrollHeight
            messageBox.value= '';
        }

        let ws = new WebSocket('ws://localhost:3000');

        //connection opened
        ws.onopen = ()=>{
            console.log("Connected to Server");
        };

        sendBtn.onclick = ()=>{
            if(ws){
                ws.send(messageBox.value);
                //replace ME with my ID
                showMessage(`ME ${messageBox.value}`);
            }else {
                alert('ERROR: Not COnnected... refresh to try again');
            }
        }

        //Listen for messages
        ws.onmessage = ({data})=>{
            //replace incoming with sender ID
            showMessage(`Incoming: ${data}`);
        }

        ws.onclose =()=>{
            //put client ID to indicate who disconnected.
            console.log("Client Disconnected");
            alert("Connection closed... refresh to try again");
        }


    }else {
        alert("WebSocket Not supported on your Browser!!");
    }

})