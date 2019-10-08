function indexJS(){
    if (PLAYERS) {
        try {
            renderApp();
        } catch (ReferenceError) {
            location.reload();
        }
    }
}
