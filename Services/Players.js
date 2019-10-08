function Player(playerId, name, team, pool, tieBreak, points){
    return {
        "playerId": playerId,
        "name": name,
        "team": team,
        "pool": pool,
        "tieBreak": tieBreak,
        "points": points
    }
}

const PLAYERS = [
    Player(1, "Andrea", "Tonga", "C",0, 1),
    Player(2, "Claire", "Ireland", "A", 1, 11),
    Player(3, "Freddy", "Scotland", "A", 0, 5),
    Player(4, "Louise", "Russia", "A", -1, 0),
    Player(5, "Naomi", "England", "C", 0, 15),
    Player(6, "George", "Canada", "B", 0, 0),
    Player(7, "Geraint", "Namibia", "B", -1, 0),
    Player(8, "Josie", "France", "C", 0, 13),
    Player(9, "Martine", "Samoa", "A", -1, 5),
    Player(10, "Ian", "Fiji", "D", 0, 7),
    Player(11, "Julian", "Argentina", "C", 0, 6),
    Player(12, "Lee", "Italy", "B", -1, 10),
    Player(13, "Leah", "New Zealand", "B", 0, 14),
    Player(14, "Gary", "Japan", "A", 0, 14),
    Player(15, "Jack", "USA", "C", -1, 0),
    Player(16, "Joe", "Uruguay", "D", 0, 4),
    Player(17, "Connor", "South Africa", "B", 1, 10),
    Player(18, "Callum", "Georgia", "D", -2, 5),
    Player(19, "Lili","Australia", "D", 0, 11),
    Player(20, "Rhiannon", "Wales", "D", 1, 9)
]

function getPlayer(name){
    return PLAYERS.filter(player => player['name']==name)[0];
}

function getPlayerById(id){
    return PLAYERS.filter(player => player['playerId']==id)[0];
}