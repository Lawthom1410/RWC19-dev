stateChatBoard = {
    "activePlayer": sessionStorage.getItem("activePlayer")
}
async function renderChatBoard(){
    tags = document.getElementsByClassName("ChatBoard");
    for (let i of tags) {

        let HTML=``;
        if (stateChatBoard['activePlayer']){
            let heightFooter = document.getElementsByClassName("Footer")[0].clientHeight;
            HTML += `    
            <div class="ChatPosts"></div> 
            <div class="ChatInputBar" style="bottom:${heightFooter}"></div>   
            `;
        } else {
            HTML += `
            <div class="ChatLogin"></div>
            `
        }
        i.innerHTML = HTML;

        renderChatInputBar();
        renderChatPosts();
        renderChatLogin();

        if (stateChatBoard['activePlayer']){
            let count = 0;
            while (stateBody['board']=="ChatBoard" && count<120){
                count++;
                getPosts();
                await sleep(1000);
            }
            if (stateBody['board']=="ChatBoard"){
                window.alert("Message Board timed out, please refresh.");
            }
        }
    }
    stateChatPosts['scrolled']=false;
}