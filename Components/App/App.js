try {
    renderApp();
} catch (ReferenceError) {
    location.reload();
}
console.log("App.js");
function renderApp(){
    tags = document.getElementsByClassName("App");
    for (let i of tags) {
        
        let HTML = `
        <div class='Header sticky-top'></div>
        <div class='Body'></div>
        <div class='Footer'></div>
        `;   

        i.innerHTML = HTML;
    }
    renderHeader();
    renderBody();
    renderFooter();
}