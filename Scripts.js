function importScript(script, scriptType){
    body = document.getElementById("body");
    tag = document.createElement("script");
    if (scriptType==constants){
        src = "Constants/"+script+".js";
    } else if (scriptType==services){
        src = "Services/"+script+".js";
    } else if (scriptType==components){
        src = "Components/"+script+"/"+script+".js";
    }
    tag.setAttribute("src", src);
    body.append(tag);
}

const services = [
    "PlayerService",
    "PostService"
]

const constants = [
    "MakeRequest",
    "Fixtures",
    "Constants"
]

const components = [
    "App",
    "Header",
    "Body", "TitleBar", "TournamentBoard",
    "Footer",
    "FixturesBoard",
    "PlayersBoard",
    "ChatBoard",
    "ChatPosts",
    "ChatInputBar",
    "PlayersCard",
    "TournamentTable",
    "TournamentKnockoutMatch",
    "PlayerElement",
    "TournamentFinalMatch",
    "FixturesDateContainer",
    "FixturesCard"
]

const scriptTypes = [services, constants, components];
for (scriptType of scriptTypes) {
    for (script of scriptType) {
        importScript(script, scriptType);
    }
}