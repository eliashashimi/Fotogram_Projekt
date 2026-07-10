function h2Temp (i) {
    return /*html*/`
        <h2>${photoArray[i].name}</h2>
    `;
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

function dialogFooterTemp(i) {
    return /*html*/`
    <div class="diaFootTemp">
        <button class="arrows" onclick="btnArrowLeft(${i})" ><img src="./assets/icons/pfeil-links.svg" alt="pfeil nach links"></button>
        <p class="dialogFooter-P" >${i + 1}/${photoArray.length}</p>
        <button class="arrows" onclick="btnArrowRight(${i})" ><img src="./assets/icons/pfeil-rechts.svg" alt="pfeil nach links"></button>  
    </div>
    `;
}