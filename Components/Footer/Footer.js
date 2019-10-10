function renderFooter(activeBtn){
    if (!activeBtn) {activeBtn = "tournamentBtn"}
    tags = document.getElementsByClassName("Footer");
    for (let i of tags) {

        let HTML = `
        <div class='container d-flex justify-content-between'>
           <a class='material-icons footer-icon' id='tournamentBtn'>table_chart</a>
           <a class='material-icons footer-icon' id='fixturesBtn'>sports_rugby</a>
           <a class='material-icons footer-icon' id='playersBtn'>group</a>
           <a class='material-icons footer-icon' id='chatBtn'>forum</a>
        </div>
        `;

        i.innerHTML = HTML;
    }
    document.getElementById('tournamentBtn').addEventListener('click', () => Footer_handleTournamentBtn());
    document.getElementById('fixturesBtn').addEventListener('click', () => Footer_handleFixturesBtn());
    document.getElementById('playersBtn').addEventListener('click', () => Footer_handlePlayersBtn());
    document.getElementById('chatBtn').addEventListener('click', () => Footer_handleChatBtn());
    document.getElementById(activeBtn).setAttribute("style", "color: rgb(10, 28, 44)");
}

function Footer_handleTournamentBtn(){
    renderBody("TournamentBoard");
    document.getElementsByClassName("Body")[0].scrollIntoView();
    renderFooter("tournamentBtn");
}

function Footer_handleFixturesBtn(){
    renderBody("FixturesBoard");
    document.getElementsByClassName("Body")[0].scrollIntoView();
    renderFooter("fixturesBtn");
}

function Footer_handlePlayersBtn(){
    renderBody("PlayersBoard");
    document.getElementsByClassName("Body")[0].scrollIntoView();
    renderFooter("playersBtn");
}

function Footer_handleChatBtn(){
    renderBody("ChatBoard");
    stateChatPosts['scrolled']=false;
    document.getElementsByClassName("Body")[0].scrollIntoView(false);
    renderFooter("chatBtn");
    // window.location = "http://localhost:8080";
}

