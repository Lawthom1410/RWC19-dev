function renderPlayersCard(){
    tags = document.getElementsByClassName("PlayersCard");
    for (let i of tags) {
        let name = i.getAttribute("Name");
        let team = i.getAttribute("Team");

        let image = "./img/Players/"+name+"Sqr.png";
        let logo = "./img/Teams/"+team+"_logo.png";
        let flag = "./img/Teams/"+team+"_flag.png";
        let colour = i.getAttribute("Colour");

        let HTML = `
        <div class="card player-card">
            <div class="card-body player-card-body" style="background-image: url('./img/Style/`+team+`_bg.png')">
                <img src="`+image+`" class="player-card-img">
                <h1 class="player-card-name">`+name+`</h1>
                <h2 class="player-card-team">`+team+`</h2>
                <img src="`+logo+`" class="player-card-logo">
                <img src="`+flag+`" class="player-card-flag">
            </div>
        </div>
        `;

        i.innerHTML = HTML;
    }
}