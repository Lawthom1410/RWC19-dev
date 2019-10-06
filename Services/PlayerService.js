function Player(args){
    return {
        "name": args['playerName'],
        "team": args['teamName'],
        "pool": args['pool'],
        "tieBreak": parseInt(args['tieBreak']),
        "points": parseInt(args['points'])
    }
}

let PLAYERS=[];
makeRequest("GET", "https://rugby-sweep-3.appspot.com/players").then((value) => {
    PLAYERS = value.map(player => Player(player));
    indexJS();
})

function getPlayer(name){
    return PLAYERS.filter(player => player['name']==name)[0];
}