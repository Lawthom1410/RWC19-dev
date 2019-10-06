function renderFixturesBoard(activeMatches, activeBtn){
  if(!activeMatches) {activeMatches = FIXTURES}
  if(!activeBtn) {activeBtn = "All"}
  tags = document.getElementsByClassName("FixturesBoard");
  for (let i of tags) {
    let currentDate;
      
    let HTML = `
    <div class="fixtures-filters-container">
      <div>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" id="fixtureBtnAll" onClick="renderFixturesBoard()">All</button>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" id="fixtureBtnFixtures" onClick="filterFixtures()">Fixtures</button>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" id="fixtureBtnResults" onClick="filterResults()">Results</button>
      </div>
      <div>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" id="fixtureBtnToday" onClick="filterToday()">Today</button>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" id="fixtureBtnTomorrow" onClick="filterTomorrow()">Tomorrow</button>
      </div>
    </div>
    `;
    for (let match of activeMatches){
      if (currentDate != match['date']){
        currentDate = match['date'];
        HTML += `
        <div class="FixturesDateContainer" Date="`+currentDate+`"></div>
        `
      }
    }
    if (!activeMatches.length){
      HTML += `
      <h1> No Matches Available </h1>
      `
    }

    i.innerHTML = HTML;

    document.getElementById("fixtureBtn"+activeBtn).setAttribute('class', 'btn btn-primary btn-lg fixtures-filter-btn');
  }
  renderFixturesDateContainer(activeMatches);
}

function filterFixtures() {
  activeMatches = FIXTURES.filter(match => match['homeScore']==null);
  renderFixturesBoard(activeMatches, "Fixtures");
}

function filterResults() {
  activeMatches = FIXTURES.filter(match => match['homeScore']!=null).reverse();
  renderFixturesBoard(activeMatches, "Results");
}

function filterToday() {
  date = getTodayDate();
  day = (date[0]).toString();
  if (day.length==1){day = "0"+day}
  activeMatches = FIXTURES.filter(match => match['date']==day+" "+date[1]);
  renderFixturesBoard(activeMatches, "Today");
}

function filterTomorrow() {
  date = getTodayDate();
  day = (date[0]+1).toString();
  if (day.length==1){day = "0"+day}
  activeMatches = FIXTURES.filter(match => match['date']==day+" "+date[1]);
  renderFixturesBoard(activeMatches, "Tomorrow");
}

function getTodayDate() {
  let d = new Date();
  let months = {
    8: "september",
    9: "october",
    10: "november"
  }
  return [d.getDate(), months[d.getMonth()]];
}