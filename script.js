const photoArray = [
    {
        name: "See und Berge mit Eis und Schnee ",
        link: "./assets/images/1_Pic.jpg"
    },
    {
        name: "Regnerische Stadt bei Nacht mit Telefonmasten und Kabel",
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
        name: "Ein Mann auf einem Fels im Meer mit leuchtender Taschenlampe in der Nacht",
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
        name: "Mit Schnee bedeckte Gebirge unter Blauem Himmel",
        link: "./assets/images/11_Pic.jpg"
    },
    {
        name: "Ein Baum im Schnee und mit schnee bedeckt",
        link: "./assets/images/12_Pic.jpg"
    }
];

const containerRef = document.getElementById('photo-box-content');

function renderBoxes() {
    containerRef.innerHTML = "";
    for (let i = 0; i < photoArray.length; i++) {
        containerRef.innerHTML += 
        `
    }
}