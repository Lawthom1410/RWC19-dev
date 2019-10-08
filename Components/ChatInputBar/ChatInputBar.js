function renderChatInputBar(){
    tags = document.getElementsByClassName("ChatInputBar");
    for (let i of tags) {        
        let HTML = `
        <form id="message-input-form" onSubmit="return handleChatInput(this)">
            <select id="player-select" name="Player">
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
    sendMessage(playerId, messageContent);
    document.getElementById("message-input-form").reset();
    return false;
}