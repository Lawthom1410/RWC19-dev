function Fixture(id, homeName, awayName, homeScore, awayScore, stage, day, date, time, venue){
    return {
        "id": id,
        "homeName": homeName,
        "awayName": awayName,
        "homeScore": homeScore,
        "awayScore": awayScore,
        "stage": stage,
        "day": day,
        "date": date,
        "time": time,
        "venue": venue
    }
}

const FIXTURES = [
    Fixture(1, "Gary", "Louise", 30, 10, "pool", "fri", "20 september", "11:45", "Tokyo Stadium, Tokyo"),
    Fixture(2, "Lili", "Ian", 39, 21, "pool", "sat", "21 september", "05:45", "Sapporo Dome, Sapporo" ),
    Fixture(3, "Josie", "Julian", 23, 21, "pool", "Sat", "21 september", "08:15", "Tokyo Stadium, Tokyo"),
    Fixture(4, "Leah", "Connor", 23, 13, "pool", "sat", "21 september", "10:45", "International Stadium Yokohama, Kanagawa Prefecture, Yokohama City"),
    Fixture(5, "Lee", "Geraint", 47, 22, "pool", "sun", "22 september", "06:15", "Hanazono Rugby Stadium, Osaka Prefecture, Higashiosaka City"),
    Fixture(6, "Claire", "Freddy", 27, 3, "pool", "sun", "22 september", "08:45", "International Stadium Yokohama, Kanagawa Prefecture, Yokohama City"),
    Fixture(7, "Naomi", "Andrea", 35, 3, "pool", "sun", "22 september", "11:15", "Sapporo Dome, Sapporo"),
    Fixture(8, "Rhiannon", "Callum", 43, 14, "pool", "mon", "23 september", "11:15", "City of Toyota Stadium, Aichi Prefecture, Toyota City"),
    Fixture(9, "Louise", "Martine", 9, 34, "pool", "tue", "24 september", "11:15", "Kumagaya Rugby Stadium, Saitama Prefecture, Kumagaya City"),
    Fixture(10, "Ian", "Joe", 27, 30, "pool", "wed", "25 september", "06:15", "Kamaishi Recovery Memorial Stadium, Iwate Prefecture, Kamaishi City"),
    Fixture(11, "Lee", "George", 48, 7, "pool", "thur", "26 september", "08:45", "Fukuoka Hakatanomori Stadium, Fukuoka Prefecture, Fukuoka City"),
    Fixture(12, "Naomi", "Jack", 45, 7, "pool", "thur", "26 september", "11:45", "Kobe Misaki Stadium, Kobe City"),
    Fixture(13, "Julian", "Andrea", 28, 12, "pool", "sat", "28 september", "05:45", "Hanazono Rugby Stadium, Osaka Prefecture, Higashiosaka City"),
    Fixture(14, "Gary", "Claire", 19, 12, "pool", "sat", "28 september", "08:15", "Shizuoka Stadium Ecopa, Shizuoka Prefecture"),
    Fixture(15, "Connor", "Geraint", 57, 3, "pool", "sat", "28 september", "10:45", "City of Toyota Stadium, Aichi Prefecture, Toyota City"),
    Fixture(16, "Callum", "Joe", 33, 7, "pool", "sun", "29 september", "06:15", "Kumagaya Rugby Stadium, Saitama Prefecture, Kumagaya City"),
    Fixture(17, "Lili", "Rhiannon", 25, 29, "pool", "sun", "29 september", "08:45", "Tokyo Stadium, Tokyo"),
    Fixture(18, "Freddy", "Martine", 34, 0, "pool", "mon", "30 september", "11:15", "Kobe Misaki Stadium, Kobe City"),
    Fixture(19, "Josie", "Jack", 33, 9, "pool", "wed", "02 october", "08:45", "Fukuoka Hakatanomori Stadium, Fukuoka Prefecture, Fukuoka City"),
    Fixture(20, "Leah", "George", 63, 0, "pool", "wed", "02 october", "11:15", "Oita Stadium, Oita Prefecture"),
    Fixture(21, "Callum", "Ian", 10, 45, "pool", "thur", "03 october", "06:15", "Hanazono Rugby Stadium, Osaka Prefecture, Higashiosaka City"),
    Fixture(22, "Claire", "Louise", 35, 0, "pool", "thur", "03 october", "11:15", "Kobe Misaki Stadium, Kobe City"),
    Fixture(23, "Connor", "Lee", 49, 3, "pool", "fri", "04 october", "10:45", "Shizuoka Stadium Ecopa, Shizuoka Prefecture"),
    Fixture(24, "Lili", "Joe", 45, 10, "pool", "sat", "05 october", "06:15", "Oita Stadium, Oita Prefecture"),
    Fixture(25, "Naomi", "Julian", 39, 10, "pool", "sat", "05 october", "09:00", "Tokyo Stadium, Tokyo"),
    Fixture(26, "Gary", "Martine", 38, 19, "pool", "sat", "05 october", "11:30", "City of Toyota Stadium, Aichi Prefecture, Toyota City"),
    Fixture(27, "Leah", "Geraint", 71, 9, "pool", "sun", "06 october", "05:45", "Tokyo Stadium, Tokyo"),
    Fixture(28, "Josie", "Andrea", null, null, "pool", "sun", "06 october", "08:45", "Kumamoto Stadium, Kumamoto Prefecture, Kumamoto City"),
    Fixture(29, "Connor", "George", null, null, "pool", "tue", "08 october", "11:15", "Kobe Misaki Stadium, Kobe City"),
    Fixture(30, "Julian", "Jack", null, null, "pool", "wed", "09 october", "05:45", "Kumagaya Rugby Stadium, Saitama Prefecture, Kumagaya City"),
    Fixture(31, "Freddy", "Louise", null, null, "pool", "wed", "09 october", "08:15", "Shizuoka Stadium Ecopa, Shizuoka Prefecture"),
    Fixture(32, "Rhiannon", "Ian", null, null, "pool", "wed", "09 october", "10:45", "Oita Stadium, Oita Prefecture"),
    Fixture(33, "Lili", "Callum", null, null, "pool", "fri", "11 october", "11:15", "Shizuoka Stadium Ecopa, Shizuoka Prefecture"),
    Fixture(34, "Leah", "Lee", null, null, "pool", "sat", "12 october", "05:45", "City of Toyota Stadium, Aichi Prefecture, Toyota City"),
    Fixture(35, "Naomi", "Josie", null, null, "pool", "sat", "12 october", "09:15", "nternational Stadium Yokohama, Kanagawa Prefecture, Yokohama City"),
    Fixture(36, "Claire", "Martine", null, null, "pool", "sat", "12 october", "11:45", "Fukuoka Hakatanomori Stadium, Fukuoka Prefecture, Fukuoka City"),
    Fixture(37, "Geraint", "George", null, null, "pool", "sun", "13 october", "04:15", "Kamaishi Recovery Memorial Stadium, Iwate Prefecture, Kamaishi City"),
    Fixture(38, "Jack", "Andrea", null, null, "pool", "sun", "13 october", "06:45", "Hanazono Rugby Stadium, Osaka Prefecture, Higashiosaka City"),
    Fixture(39, "Rhiannon", "Joe", null, null, "pool", "sun", "13 october", "09:15", "Kumamoto Stadium, Kumamoto Prefecture, Kumamoto City"),
    Fixture(40, "Gary", "Freddy", null, null, "pool", "sun", "13 october", "11:45", "International Stadium Yokohama, Kanagawa Prefecture, Yokohama City")
]

function getFixture(id){
    return FIXTURES.filter(fixture => fixture['id']==id)[0];
}