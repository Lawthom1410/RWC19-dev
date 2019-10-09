
async function renderChatBoard(){
    tags = document.getElementsByClassName("ChatBoard");
    for (let i of tags) {
        let heightFooter = document.getElementsByClassName("Footer")[0].clientHeight;
        let HTML = `    
        <div class="ChatPosts"></div> 
        <div class="ChatInputBar" style="bottom:${heightFooter}"></div>   
        `;
        i.innerHTML = HTML;

        renderChatInputBar();
        renderChatPosts();

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
    stateChatPosts['scrolled']=false;
}