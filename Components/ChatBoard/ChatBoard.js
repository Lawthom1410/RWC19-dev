console.log("ChatBoard.js");
function renderChatBoard(){
    tags = document.getElementsByClassName("ChatBoard");
    for (let i of tags) {
        
        let HTML =  `
        <h1>This will be the Message Board</h2>
        `;

        i.innerHTML = HTML;
    }
}