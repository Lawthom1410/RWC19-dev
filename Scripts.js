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
    "Fixtures",
    "Players",
    "PostService"
]

const constants = [
    "MakeRequest",
    "Constants"
]

const components = [
    "Header",
    "Body", "TitleBar", "TournamentBoard",
    "Footer",
    "FixturesBoard",
    "PlayersBoard",
    "ChatBoard",
    "ChatPosts",
    "ChatLogin",
    "ChatInputBar",
    "PlayersCard",
    "TournamentTable",
    "TournamentKnockoutMatch",
    "PlayerElement",
    "TournamentFinalMatch",
    "FixturesDateContainer",
    "FixturesCard"
]

const scriptTypes = [constants, services, components];
for (scriptType of scriptTypes) {
    for (script of scriptType) {
        importScript(script, scriptType);
    }
}
importScript("App", components);