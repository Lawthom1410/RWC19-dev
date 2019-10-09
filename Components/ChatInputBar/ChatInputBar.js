stateChatInputBar = {
    "player": null
}

function renderChatInputBar(){
    tags = document.getElementsByClassName("ChatInputBar");
    for (let i of tags) {        
        let HTML = `
        <div class="card chat-input-container">
            <h1 id="chat-error-message"></h1>
            <button class="btn btn-lg btn-danger" onClick="handleLogOut()">Log Out</button>
            <form id="message-input-form" onSubmit="return handleChatInput(this)">
                <div class="chat-input-box-btn">
                    <input id="message-input" placeholder="Type a Message" class="form-control" type="text">
                    <button class='material-icons chat-send-icon' style="color: rgb(10, 28, 44);" id='chatSend'>send</button>
                </div>
            </form>
        </div>
        `;

        i.innerHTML = HTML;
    }
}

function handleChatInput(data){
    let playerId = stateChatBoard['activePlayer'];
    let messageContent = data.elements["message-input"].value;
    if (playerId && messageContent.length<250){
        document.getElementById("chat-error-message").innerText = "";
        sendMessage(playerId, messageContent);
        // renderChatPosts();
        document.getElementById("message-input-form").reset();
    } else if (!playerId){
        document.getElementById("chat-error-message").innerText = "Who are you??";
        console.log("Who are you?");
    } else if (messageContent>250) {
        document.getElementById("chat-error-message").innerText = "Message should be less than 250 characters";
    }
    return false;
}

function handleLogOut(){
    sessionStorage.removeItem("activePlayer");
    stateChatBoard['activePlayer'] = null;
    renderChatBoard();
}