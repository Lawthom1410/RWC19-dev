function Player(playerId, name, team, pool, tieBreak, points, pin){
    return {
        "playerId": playerId,
        "name": name,
        "team": team,
        "pool": pool,
        "tieBreak": tieBreak,
        "points": points,
        "pin": pin
    }
}

const PLAYERS = [
    Player(1, "Andrea", "Tonga", "C",0, 1, 1000),
    Player(2, "Claire", "Ireland", "A", 1, 11, 1234),
    Player(3, "Freddy", "Scotland", "A", 0, 5, 1010),
    Player(4, "Louise", "Russia", "A", -1, 0, 2000),
    Player(5, "Naomi", "England", "C", 0, 15, 9999),
    Player(6, "George", "Canada", "B", 0, 0, 2222),
    Player(7, "Geraint", "Namibia", "B", -1, 0, 2345),
    Player(8, "Josie", "France", "C", 0, 13, 5555),
    Player(9, "Martine", "Samoa", "A", -1, 5, 1111),
    Player(10, "Ian", "Fiji", "D", 0, 7, 5678),
    Player(11, "Julian", "Argentina", "C", 0, 6, 4321),
    Player(12, "Lee", "Italy", "B", -1, 10, 6789),
    Player(13, "Leah", "New Zealand", "B", 0, 14, 9999),
    Player(14, "Gary", "Japan", "A", 0, 14, 5432),
    Player(15, "Jack", "USA", "C", -1, 0, 1234),
    Player(16, "Joe", "Uruguay", "D", 0, 4, 5000),
    Player(17, "Connor", "South Africa", "B", 1, 10, 2020),
    Player(18, "Callum", "Georgia", "D", -2, 5, 1997),
    Player(19, "Lili","Australia", "D", 0, 11, 3333),
    Player(20, "Rhiannon", "Wales", "D", 1, 9, 4444)
]

function getPlayer(inputName){
    let name = toTitleCase(inputName);
    return PLAYERS.filter(player => player['name']==name)[0];
}

function getPlayerById(id){
    return PLAYERS.filter(player => player['playerId']==id)[0];
}

function checkPlayerPin(inputName, pin) {
    let name = toTitleCase(inputName);
    if (PLAYERS.filter(player => player['name']==name).length == 0){
        return "Invalid name";
    }
    if (pin.length != 4) {
        return "Please enter 4-digit pin";
    }
    let playerPin = getPlayer(name)['pin'];
    console.log(getPlayer(name));
    console.log(pin, playerPin);

    if (pin == playerPin) {
        return true;
    } else {
        return "Wrong pin";
    }
}