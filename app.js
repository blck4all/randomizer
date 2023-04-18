
//From html
const page = document.getElementById('container');
const selectionButton = document.getElementById('selectionButton');
const selectedSection = document.getElementById('selectedSection');

// Data
var adsoMembers = ["JULIAN ERNESTO BASTIDAS BURGOS",
"SANTIAGO ALEJANDRO CHACON YAMA",
"JUAN DANIEL CHARFUELAN TORO",
"CARLOS FABIAN CUAICAL CHALPARIZAN",
"MILTON LEONARDO CUARAN CUARAN",
"JHONATAN DAVID CUASQUER TELLO",
"DEIVID CUAYAL",
"SANTIAGO ALEJANDRO DUMES MARTINEZ",
"DANIEL MAURICIO ERAZO CHITAN",
"DARIO ADOLFO FIGUEROA CHAMORRO",
"ASAF DAVID GUEVARA MUÑOZ",
"EDWIN URIEL HUALPA MALES",
"CARLOS IVAN IMBACUAN YEPEZ",
"JEFERSON DANIEL MEJIA RUEDA",
"MARILYN MELISSA MICANQUER LAGUNA",
"CARLOS ANDRES MORALES RAMIREZ",
"BRAYAN ESTIVEN ORDOÑEZ ESTRELLA",
"SAMANTHA PATRICIA PILPUD ROSERO",
"JONATHAN DAVID PRADO",
"JAVIER ALBEIRO RIASCOS NARVAEZ",
"WENDY BRIGITH ROSERO GUERRERO",
"YENNY MARBELL SALAZAR DELGADO",
"MILEIDY LISETH SANTIAGO IRUA",
"JULIAN ALEJANDRO SILVA SABOGAL",
"JAIME ANDRES TACAN ROSERO",
"EVELIN CAROLINA TEPUD DIAZ",
"MATEO CAMILO TOBAR FLORES",
"AURA LIZETH TORRES LÓPEZ",
"CRISTIAN DANIEL VILLAREAL CUASQUEN"];
var adsoMembersSelected = [];

//Listeners
selectionButton.addEventListener("click", selectParticipant);

printParticipants();  


//FUNCTIONS USED

//Print a new div, x is the member selected
function selectParticipant(){
    var r = random(0, adsoMembers.length);
    for(i=0;i<adsoMembers.length;i++){
        if(r == i){ 
            const adsoMemberSelected = adsoMembers[i];
            adsoMembersSelected.push(adsoMemberSelected);
            printSelected(adsoMemberSelected);
        }
    }
}
function printSelected(x){
    selectedSection.insertAdjacentHTML('beforeend', `<div>${x}</div>`);
}
function printParticipants() {
    adsoMembers.forEach((member) => {
        let adMember = `<div>${member}</div>`;
        page.innerHTML += adMember;
    })
}
function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
