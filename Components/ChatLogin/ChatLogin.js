function renderChatLogin(){
    tags = document.getElementsByClassName("ChatLogin");
    for (let i of tags) {  
        let HTML = `
        <div class="card login-card">
            <h1 id="login-error">Log in to make post</h1>
            <form id="login-form" onSubmit="handleLogin(this)">
                <input id="username" class="form-control login-input" type="text" placeholder="Name">
                <input id="pin" class="form-control login-input" type="number" placeholder="PIN">
                <button class="btn btn-lg btn-success login-input">Log In</button>
            </form>
        </div>        
       `;
        i.innerHTML = HTML;
    }
}

function handleLogin(data){
    let username = data.elements['username'].value;
    let pin = data.elements['pin'].value;
    let check = checkPlayerPin(username, pin);
    if (check==true) {
        sessionStorage.setItem("activePlayer", getPlayer(username)['playerId']);
        console.log("errror here " + getPlayer(username));
        stateChatBoard['activePlayer'] = getPlayer(username)['playerId'];
        renderChatBoard();
    } else {
        document.getElementById("login-error").innerText = check;
        document.getElementById("login-error").setAttribute("class","login-error");
    }
    // document.getElementById("login-form").reset();
    return false;
}