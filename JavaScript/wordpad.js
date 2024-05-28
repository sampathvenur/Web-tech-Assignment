function displayInfo(element) {
    const info = {
        'Toolbar': 'The toolbar contains various tools and options for editing documents.',
        'Status Bar': 'The status bar displays information about the document, such as page number, word count, etc.',
        'Menu Bar': 'The menu bar contains menus like File, Edit, View, etc., providing access to additional functionalities.',
        'Title Bar': 'The title bar displays the name of the document and contains controls for minimizing, maximizing, and closing the window.',
        'Ruler': 'The ruler is used for adjusting margins, tabs, and indentation in the document.'
    };
    const popup = document.getElementById('info-popup');
    popup.innerText = info[element];
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}