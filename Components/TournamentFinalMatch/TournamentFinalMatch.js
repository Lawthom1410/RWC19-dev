function renderTournamentFinalMatch(){
    tags = document.getElementsByClassName("TournamentFinalMatch");
    for (let i of tags) {
        let roundLabel = i.getAttribute("RoundLabel");
        let namePlayer1 = i.getAttribute("NamePlayer1");
        let namePlayer2 = i.getAttribute("NamePlayer2");

        let HTML = ` 
        <div class="card group-card final-card">
            <div class="card-header pool-header pool-header-Final">
                <h1 class="pool-title">`+roundLabel+`</h1>
            </div>
            <ul class="list-group list-group-flush final-grid-container">
                <li class="list-group-item final-card-item">
                    <div class="PlayerElement" PlayerName="`+namePlayer1+`"></div>
                </li> 
                <li class="list-group-item final-card-item">
                    <div class="PlayerElement" PlayerName="`+namePlayer2+`"></div>
                </li> 
            </ul>
        </div>
`;

        i.innerHTML = HTML;

    }
    renderPlayerElement();
}