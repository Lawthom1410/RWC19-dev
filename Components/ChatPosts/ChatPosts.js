stateChatPosts = {
    "scrolled": false,
    "retries": 0
}

function renderChatPosts(){
    tags = document.getElementsByClassName("ChatPosts");
    for (let i of tags) {
        let HTML=``;
        if (POSTS){
            stateChatPosts['retires']=0;
            let heightInput = document.getElementsByClassName("ChatInputBar")[0].clientHeight;
            HTML += `<div id="chat-posts" style="padding-bottom:${heightInput}">`;
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
                            <h1><strong>${getPlayerById(post['playerId'])['name']}</strong> says</h1>
                            <h2 class="chat-post-time" style="font-weight: lighter">${post['time'].slice(0,5)}</h2>
                            <h2 class="chat-post-text style="font-weight: light">${JSON.parse(post['postContent'])[0]['content']}<h2>
                        </div>
                    </div>
                </div>
                `
            } 
            HTML += `</div>`
        } else if (stateChatPosts['retries']<10) {
            HTML += `
            <h1>Loading Posts</h1>
            `
            stateChatPosts['retries']++;
            console.log(stateChatPosts['retries']);
        } else {
            HTML += `
            <h1>Servers are down atm!</h1>
            `
        }

        i.innerHTML = HTML;
    }
}