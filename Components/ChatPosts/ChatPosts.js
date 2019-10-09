stateChatPosts = {
    "scrolled": false
}

function renderChatPosts(){
    tags = document.getElementsByClassName("ChatPosts");
    for (let i of tags) {
        
        let heightInput = document.getElementsByClassName("ChatInputBar")[0].clientHeight;
        let HTML = `<div id="chat-posts" style="padding-bottom:${heightInput}">`;
        let count = 0;
        for (post of POSTS){
            count++;
            HTML += `
            <div class="card" id="post-card-${count}">
                <div class="chat-post-container">
                    <div>
                    <img src="./img/Players/`+getPlayerById(post['playerId'])['name']+`Sqr.png" class="fixture-element-img">
                    </div>
                    <div class="chat-post-text-box">
                        <h1>${getPlayerById(post['playerId'])['name']}</h1>
                        <h2 class="chat-post-time" style="font-weight: lighter">${post['time'].slice(0,5)}</h2>
                        <h2 class="chat-post-text style="font-weight: light">${JSON.parse(post['postContent'])[0]['content']}<h2>
                    </div>
                </div>
            </div>
            `
        } 
        HTML += `</div>`

        i.innerHTML = HTML;
    }
}