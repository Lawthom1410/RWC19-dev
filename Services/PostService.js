function Post(args){
    return {
        "postId": args['postId'],
        "playerId": args['playerId'],
        "date": args['date'],
        "time": args['time'],
        "likes": parseInt(args['likes']),
        "dislikes": parseInt(args['dislikes']),
        "postType": args['postType'],
        "postContent": args['postContent']
    }
}

let POSTS=0;
getPosts();
function getPosts() {
    console.log("get posts");
    makeRequest("GET", "https://rugby-sweep-3.appspot.com/post")
    .then((value) => {
        POSTS = value.map(post => Post(post)).reverse();
        renderChatPosts();
        if (stateChatPosts['scrolled']==false){
            document.getElementsByClassName("Body")[0].scrollIntoView(false);
            stateChatPosts['scrolled']=true;
        }
    })
}

function sendMessage(playerId, messageContent) {
    getPosts();
    let postId = POSTS[POSTS.length-1]['postId']+1;
    let messageId = JSON.parse(POSTS[POSTS.length-1]['postContent'])[0]['messageId']+1;
    console.log(JSON.parse(POSTS[POSTS.length-1]['postContent']));
    let messageObj = {
        "messageId": messageId,
        "content": messageContent
    }
    let postObj = {
        "postId": postId,
        "playerId": playerId,
        "postType": "message",
        "postContent": JSON.stringify(messageObj)
    }
    let post = JSON.stringify(postObj);
    makeRequest("POST", "https://rugby-sweep-3.appspot.com/post", post).then(() => {
        console.log("Message Sent: " + post);
        stateChatPosts['scrolled']=false;
        getPosts();
        renderChatPosts();
        document.getElementsByClassName("Body")[0].scrollIntoView(false);
    })
}