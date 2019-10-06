function renderPlayerElement(){
    tags = document.getElementsByClassName("PlayerElement");
    for (let i of tags) {
        let playerName = i.getAttribute("PlayerName");
        
        let Player = getPlayer(playerName);
        
        let HTML=``;
        if (!Player) {
            HTML = `
            <h1 class="tournament-placeholder-text">`+playerName+`</h1>
            `
        } else {
            HTML = `
            <div class="element-grid-container">
                <img src="./img/Teams/`+Player['team']+`_logo.png" class="player-element-logo">
                <img src="./img/Players/`+Player['name']+`Sqr.png" class="player-element-img">
                <div class="player-element-name-team">
                    <h1 class="player-element-name">`+Player['name']+`</h1>
                    <h3 class="player-element-team">`+Player['team']+`</h3>
                </div>
            </div>
            `
        }

        i.innerHTML = HTML;
    }
    renderPlayersCard();
}