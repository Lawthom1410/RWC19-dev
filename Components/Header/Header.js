function renderHeader(){
    tags = document.getElementsByClassName("Header");
    for (let i of tags) {
        
        let HTML = `
        <div class="row d-flex justify-content-between mx-5">
            <image class="rwc-logo" src="./img/Teams/RWC_logo.png">
            <h1 class='header-brand'>Rugby World Cup 2019</h1>
            <image class="rwc-logo" src="./img/Teams/RWC_logo.png">
        </div>
        `;

        i.innerHTML = HTML;
    }
}
