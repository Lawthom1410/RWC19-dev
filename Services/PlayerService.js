// function Player(args){
//     return {
//         "playerId": args['playerId'],
//         "name": args['playerName'],
//         "team": args['teamName'],
//         "pool": args['pool'],
//         "tieBreak": parseInt(args['tieBreak']),
//         "points": parseInt(args['points'])
//     }
// }

// function getPlayers(){
//     makeRequest("GET", "https://rugby-sweep-3.appspot.com/players")
//     .then((value) => {
//         PLAYERS = value.map(player => Player(player));
//         indexJS();
//     })
// }

// function getPlayer(name){
//     return PLAYERS.filter(player => player['name']==name)[0];
// }

// function getPlayerById(id){
//     return PLAYERS.filter(player => player['playerId']==id)[0];
// }