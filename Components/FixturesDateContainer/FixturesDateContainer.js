function renderFixturesDateContainer(activeMatches){
    if(!activeMatches) {activeMatches = FIXTURES}
    tags = document.getElementsByClassName("FixturesDateContainer");
    for (let i of tags) {
        let date = i.getAttribute("Date");
        let dateFixtures = activeMatches.filter(fixture => fixture['date']==date);

        let HTML = `<h1 class="date-label">`+date.toUpperCase()+`</h1>`;
        for (fixture of dateFixtures){
            HTML += `
            <div class="FixturesCard" FixtureId="`+fixture['id']+`"></div>
            `
        }

        i.innerHTML = HTML;

    }
    renderFixturesCard();
}