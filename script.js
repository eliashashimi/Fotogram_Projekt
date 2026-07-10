// Was brauche ich - ein Array mit Objekten in den Fotos und Namen enthalten sind
const photoArray = [
    {
        name: "See und Berge mit Eis und Schnee ",
        link: "./assets/images/1_Pic.jpg"
    },
    {
        name: "Regnerische Stadt bei Nacht",
        link: "./assets/images/2_Pic.jpg"
    },
    {
        name: "Helle und Dunkle Wolken am Himmel",
        link: "./assets/images/3_Pic.png"
    },
    {
        name: "Grün gelber Vogel auf einem Ast",
        link: "./assets/images/4_Pic.jpg"
    },
    {
        name: "Wolken Wirbel aus der All ansicht",
        link: "./assets/images/5_Pic.jpg"
    },
    {
        name: "Fluss am Berg mit trübem Wetter",
        link: "./assets/images/6_Pic.jpg"
    },
    {
        name: "Ente flattert im Wasser",
        link: "./assets/images/7_Pic.jpg"
    },
    {
        name: "Ein Mann auf einem Fels mit Taschenlampe",
        link: "./assets/images/8_Pic.jpg"
    },
    {
        name: "Kleiner weiß brauner Vogel auf einem Fels",
        link: "./assets/images/9_Pic.jpg"
    },
    {
        name: "2 kleine Leopaden auf einem Stein",
        link: "./assets/images/10_Pic.jpg"
    },
    {
        name: "Mit Schnee bedeckte Gebirge",
        link: "./assets/images/11_Pic.jpg"
    },
    {
        name: "Ein Baum im Schnee und mit schnee bedeckt",
        link: "./assets/images/12_Pic.jpg"
    }
];

// Referenz auf den Container für die Foto-Boxes
const containerRef = document.getElementById('photo-box-content');
// Aufruf der Funktion zum Rendern der Foto-Boxes


// Funktion zum Rendern der Foto-Boxes
function renderBoxes(event) {
    containerRef.innerHTML = "";
    for (let i = 0; i < photoArray.length; i++) {
        containerRef.innerHTML += /*html*/`
        <img onclick="openDialog(${i})" class="img" 
        src="${photoArray[i].link}" alt="${photoArray[i].name}" /> `;
    }
    event.stopPropagation();
}
const dialogRef = document.getElementById('myDialog');

function openDialog(i) {
    dialogRef.showModal();
    
    const h2Ref = document.getElementById('dialog-h2');
    h2Ref.innerHTML = "";
    h2Ref.innerHTML += h2Temp(i);


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
    event.stopPropagation();
}