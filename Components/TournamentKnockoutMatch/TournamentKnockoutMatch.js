function renderTournamentKnockoutMatch(){
    tags = document.getElementsByClassName("TournamentKnockoutMatch");
    for (let i of tags) {
        let roundLabel = i.getAttribute("RoundLabel");
        let namePlayer1 = i.getAttribute("NamePlayer1");
        let namePlayer2 = i.getAttribute("NamePlayer2");

        let HTML = ` 
        <div class="card group-card">
            <div class="card-header pool-header pool-header-`+roundLabel.replace(' ', '-')+`">
                <h1 class="pool-title">`+roundLabel+`</h1>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="PlayerElement" PlayerName="`+namePlayer1+`"></div>
                </li> 
                <li class="list-group-item">
                    <div class="PlayerElement" PlayerName="`+namePlayer2+`"></div>
                </li> 
            </ul>
        </div>
`;

        i.innerHTML = HTML;

    }
    renderPlayerElement();
}