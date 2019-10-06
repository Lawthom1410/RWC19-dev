function renderTournamentTable(){
    tags = document.getElementsByClassName("TournamentTable");
    for (let i of tags) {
        let pool = i.getAttribute("Pool");
        let poolPlayers = PLAYERS.filter(player => player['pool']==pool)
        .sort((a,b) => (a.points < b.points) ? 1 : (a.points === b.points) ? ((a.tieBreak < b.tieBreak) ? 1: -1) : -1);
        
        let HTML = `
            <div class="card group-card">
                <div class="card-header pool-header pool-header-`+pool+`">
                    <h1 class="pool-title">Pool `+pool+`</h1>
                </div>
                <ul class="list-group list-group-flush">
        `
        let playerCount = 0;
        for (player of poolPlayers) {
            playerCount++;
            HTML += `
            <li class="list-group-item pool-grid-container `
            if(playerCount==2){
                HTML += `pool-second-player`;
            }
            HTML += ` ">
                <div class="PlayerElement" PlayerName="`+player['name']+`"></div>
                <h1 class="pool-points">`+player['points']+`
            </li> 
            `
        }
        HTML += `
                </ul>  
            </div>
        `;

        i.innerHTML = HTML;

    }

    renderPlayerElement();
}