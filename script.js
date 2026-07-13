const containerRef = document.getElementById('photo-box-content');
const dialogRef = document.getElementById('myDialog');

function renderBoxes(event) {
    containerRef.innerHTML = "";
    for (let i = 0; i < photoArray.length; i++) {
        containerRef.innerHTML += openDialogTemp (i);
    }
    event.stopPropagation();
}

function openDialog(i) {
    dialogRef.showModal();
    dialogRef.classList.add('opened');
    
    dialogAllContentTemp(i);
}

function btnArrowLeft (i) {

    if (i === 0) {
        i = photoArray.length -1;
    } else {
        i--;
    }

    endDialog (event);
    openDialog (i);
}

function btnArrowRight(i) {
    
    if (i === 11) {
        i = 0;
    } else {
        i++;
    }

    endDialog (event);
    openDialog (i);
}

function endDialog(event) {
    dialogRef.close();
    dialogRef.classList.remove('opened');
    event.stopPropagation();
}

function eventBubbling(event) {
    event.stopPropagation();
}
