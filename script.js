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
        link: "./assets/images/3_Pic.jpg"
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
        name: "Ein Mann auf einem Fels",
        link: "./assets/images/8_Pic.jpg"
    },
    {
        name: "Kleiner weiß brauner Vogel",
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
        name: "Ein Baum im Schnee",
        link: "./assets/images/12_Pic.jpg"
    }
];

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
