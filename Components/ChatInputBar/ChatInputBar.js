function renderChatInputBar(){
    tags = document.getElementsByClassName("ChatInputBar");
    for (let i of tags) {        
        let HTML = `
        <div class="card chat-input-container">
            <h1 id="chat-error-message"></h1>
            <form id="message-input-form" onSubmit="return handleChatInput(this)">
                <div>
                    <select id="player-select" name="Player">
                        <option disabled selected value> -- Who are you? -- </option>
                    `
                    for (player of PLAYERS) {
                        HTML += `
                        <option value="${player['playerId']}">${player['name']}</option>
                        `
                    }
                    HTML += `
                    </select>
                </div>
                <div class="chat-input-box-btn">
                    <input id="message-input" class="form-control" type="text">
                    <a class='material-icons footer-icon' id='chatSend'>send</a>
                </div>
            </form>
        </div>
        `;

        i.innerHTML = HTML;
    }
}

function handleChatInput(data){
    let playerId = data.elements["player-select"].value;
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