function indexJS(){
    try {
        renderApp();
    } catch (ReferenceError) {
        location.reload();
    }
}