
async function renderChatBoard(){
    tags = document.getElementsByClassName("ChatBoard");
    for (let i of tags) {
        let HTML = `    
        <div class="ChatPosts"></div> 
        <div class="ChatInputBar"></div>   
        `;
        i.innerHTML = HTML;

        renderChatInputBar();

        let count = 0;
        while (stateBody['board']=="ChatBoard" && count<120){
            count++;
            getPosts();
            await sleep(5000);
        }
        if (stateBody['board']=="ChatBoard"){
            window.alert("Message Board timed out, please refresh.");
        }
    }
}