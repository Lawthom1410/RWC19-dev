function renderTournamentBoard(){
    tags = document.getElementsByClassName("TournamentBoard");
    for (let i of tags) {

        let HTML = `
        <div class="tournament-grid-container">
            <div class="TournamentTable" Pool="A"></div>
            <div class="TournamentTable" Pool="D"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Winner Pool A" namePlayer2="Runner-Up Pool B"></div>
            <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Winner Pool D" namePlayer2="Runner-Up Pool C"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentKnockoutMatch" RoundLabel="Semi Final" namePlayer1="Winner QF1" namePlayer2="Winner QF2"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentFinalMatch" RoundLabel="Final" namePlayer1="Winner SF1" namePlayer2="Winner SF2"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentKnockoutMatch" RoundLabel="Semi Final" namePlayer1="Winner QF3" namePlayer2="Winner QF4"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Winner Pool B" namePlayer2="Runner-Up Pool A"></div>
            <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Winner Pool C" namePlayer2="Runner-Up Pool D"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentTable" Pool="B"></div>
            <div class="TournamentTable" Pool="C"></div>
        </div>

        `;

        i.innerHTML = HTML;
    }

    renderTournamentTable();
    renderTournamentKnockoutMatch();
    renderTournamentFinalMatch();
}