function renderChatInputBar(){
    tags = document.getElementsByClassName("ChatInputBar");
    for (let i of tags) {        
        let HTML = `
        <h1 id="chat-error-message"></h1>
        <form id="message-input-form" onSubmit="return handleChatInput(this)">
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
            <input id="message-input" class="" type="text">
            <button class"btn btn-lg btn-primary">Send</button>
        </form>
        `;

        i.innerHTML = HTML;
    }
}

function handleChatInput(data){
    let playerId = data.elements["player-select"].value;
    let messageContent = data.elements["message-input"].value;
    if (playerId){
        document.getElementById("chat-error-message").innerText = "";
        sendMessage(playerId, messageContent);
        renderChatPosts();
        document.getElementById("message-input-form").reset();
    } else {
        document.getElementById("chat-error-message").innerText = "Who are you??";
        console.log("Who are you?");
    }
    return false;
}