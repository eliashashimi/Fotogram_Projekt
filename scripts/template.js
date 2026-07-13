function openDialogTemp (i) {
    return /*html*/`
        <button class="photo-button" onclick="openDialog(${i})">
            <img class="img" src="${photoArray[i].link}" alt="${photoArray[i].name}" />
        </button>
    `;
}

function h2Temp (i) {
    return /*html*/`${photoArray[i].name}`;
}

function dialogBtnTemp() {
    return /*html*/`
        <img src="./assets/icons/close.png" alt="schließen Button">
    `;
}

function dialogContentTemp(i) {
    return /*html*/`
        <img src="${photoArray[i].link}" alt="${photoArray[i].name}">  
    `;
}

function dialogAllContentTemp(i) {
    
        const h2Ref = document.getElementById('dialogDescr');
        h2Ref.innerText = "";
        h2Ref.innerText += h2Temp(i);

        const xBtnRef = document.getElementById('dialogBtn');
        xBtnRef.innerHTML = "";
        xBtnRef.innerHTML += dialogBtnTemp();
    
        const dialogContentRef = document.getElementById('dialogContent');
        dialogContentRef.innerHTML = "";
        dialogContentRef.innerHTML += dialogContentTemp(i);

        const dialogFooterRef = document.getElementById('dialogFooter');
        dialogFooterRef.innerHTML = "";
        dialogFooterRef.innerHTML += dialogFooterTemp(i);
}

function dialogFooterTemp(i) {
    return /*html*/`
        <div class="diaFootTemp">
            <button class="arrows" onclick="btnArrowLeft(${i})" ><img src="./assets/icons/pfeil-links.svg" alt="pfeil nach links"></button>
            <p class="dialogFooter-P" >${i + 1}/${photoArray.length}</p>
            <button class="arrows" onclick="btnArrowRight(${i})" ><img src="./assets/icons/pfeil-rechts.svg" alt="pfeil nach links"></button>  
        </div>
    `;
}