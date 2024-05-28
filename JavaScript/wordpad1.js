function showInfo(element) {
    let info = '';

    switch(element) {
        case 'titleBar':
            info = 'The title bar displays the name of the application or document.';
            break;
        case 'menuBar':
            info = 'The menu bar contains a list of commands that are available in the application.';
            break;
        case 'ruler':
            info = 'The ruler helps to measure and align elements within the document.';
            break;
        case 'statusBar':
            info = 'The status bar provides information about the current status of the application.';
            break;
        default:
            info = 'Unknown element.';
    }

    window.open("", "Info", "width=300,height=200").document.write(`<p>${info}</p>`);
}
