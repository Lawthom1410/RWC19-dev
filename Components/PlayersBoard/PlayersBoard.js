function renderPlayersBoard(){
    tags = document.getElementsByClassName("PlayersBoard");
    for (let i of tags) {
        
        let HTML = ``;
        for (let player of PLAYERS) {
            HTML += `
            <div
                Name="`+player['name']+`"
                Team="`+player['team']+`"
                Colour="./img/Style/`+player['colour']+`"
                class="PlayersCard">
            </div>
            ` 
        }

        i.innerHTML = HTML;
    }
    renderPlayersCard();
}