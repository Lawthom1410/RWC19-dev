function renderChatPosts(){
    tags = document.getElementsByClassName("ChatPosts");
    for (let i of tags) {        
        let HTML = ``;
        for (post of POSTS){
            HTML += `
            <h1>${getPlayerById(post['playerId'])['name']}</h1>
            <h2>${JSON.parse(post['postContent'])[0]['content']}<h2>
            `
        } 

        i.innerHTML = HTML;
    }
}