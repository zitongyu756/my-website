document.getElementById('changeColorButton').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'; 
    document.body.style.color = 'white';
});

document.getElementById('highlightButton').addEventListener('click', function() {
    var selection = window.getSelection();
    if (!selection.rangeCount) return; 

    var range = selection.getRangeAt(0);
    var span = document.createElement('span');
    span.className = 'highlighted';
    range.surroundContents(span);
});

document.addEventListener('DOMContentLoaded', function() {
    const d = new Date();
    console.log(d);

    let day = d.getDay();
    let message = '';

    if (day == 0) {
        message = 'Happy Sunday';
    } else if (day == 1) {
        message = 'Happy Monday';
    } else if (day == 2) {
        message = 'Happy Tuesday';
    } else if (day == 3) {
        message = 'Happy Wednesday';
    } else if (day == 4) {
        message = 'Happy Thursday';
    } else if (day == 5) {
        message = 'Happy Friday';
    } else if (day == 6) {
        message = 'Happy Saturday';
    }

    var newElement = document.createElement('div');
    newElement.textContent = message;

    var container = document.body; 
    container.insertBefore(newElement, container.firstChild);
});