// // const listaDellaSpesa = [
// // //     0,1,2,3,4,5,6,7,8
// // // ];

// // // // ! idENTICO AL FOREACH QUI SOTTO
// // // // for (let index = 0; index < listaDellaSpesa.length; index++) {
// // // //     const element = listaDellaSpesa[index];
// // // //     console.log(element, index);
// // // // }

// // // listaDellaSpesa.forEach((element, indice) =>{
// // //     console.log(element, indice);
// // // });

// // // const nuovaLista = listaDellaSpesa.map((prodotto) => {
// // //     return  prodotto % 2 === 0;
// // // });

// // // console.log(listaDellaSpesa);

// // // // dammi tutti i numeri dispari
// // // const listaFiltrata = listaDellaSpesa.filter((element) =>{
// // //     if (element % 2 === 1){
// // //         return true;
// // //     }
// // // });

// // // console.log(listaFiltrata);


// // // const nuovoArrayFiltrato = [];
// // // for (let index = 0; index < listaDellaSpesa.length; index++) {
// // //     if (listaDellaSpesa[index] % 2 === 1){
// // //         nuovoArrayFiltrato.push(listaDellaSpesa[index]);
// // //     }
// // // }


// // // > Crea un array composto da 15 automobili.
// // // > Ogni oggetto automobile avrà le seguenti proprieta: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// // // < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// // // < Infine stampa separatamente i 3 array.

// // const cars = [
// //     {
// //         marca: "alfa romeo",
// //         modello: "stelvio",
// //         alimentazione: "benzina",
// //     },
// //     {
// //         marca: "alfa romeo",
// //         modello: "tonale",
// //         alimentazione: "diesel",
// //     },
// //     {
// //         marca: "audi",
// //         modello: "q3",
// //         alimentazione: "diesel",
// //     },
// //     {
// //         marca: "audi",
// //         modello: "e-tron GT",
// //         alimentazione: "elettrica",
// //     },
// //     {
// //         marca: "audi",
// //         modello: "a8",
// //         alimentazione: "benzina",
// //     },
// //     {
// //         marca: "bentley",
// //         modello: "flying spur",
// //         alimentazione: "benzina",
// //     },
// //     {
// //         marca: "bmw",
// //         modello: "xm",
// //         alimentazione: "benzina",
// //     },
// //     {
// //         marca: "bmw",
// //         modello: "serie 1",
// //         alimentazione: "diesel",
// //     },
// //     {
// //         marca: "cupra",
// //         modello: "ateca",
// //         alimentazione: "benzina",
// //     },
// //     {
// //         marca: "dacia",
// //         modello: "duster",
// //         alimentazione: "gpl",
// //     },
// //     {
// //         marca: "ferrari",
// //         modello: "roma",
// //         alimentazione: "benzina",
// //     },
// //     {
// //         marca: "lamborghini",
// //         modello: "urus",
// //         alimentazione: "benzina",
// //     },
// //     {
// //         marca: "tesla",
// //         modello: "model x",
// //         alimentazione: "elettrico",
// //     },
// //     {
// //         marca: "fiat",
// //         modello: "500",
// //         alimentazione: "gpl",
// //     },
// //     {
// //         marca: "toyota",
// //         modello: "corolla",
// //         alimentazione: "benzina",
// //     },
// // ];
// // console.log(cars);

// // // const gasAutos = cars.filter((singleAuto) => {
// // //     if (singleAuto.alimentazione === 'benzina'){
// // //         return true;
// // //     }
// // // });

// // // console.log(gasAutos);

// // // const dieselAutos = cars.filter((singleAuto) => {
// // //         if (singleAuto.alimentazione === 'diesel'){
// // //             return true;
// // //         }
// // //     });

// // // console.log(dieselAutos);

// // // const otherAutos = cars.filter((singleAuto) => {
// // //         if (singleAuto.alimentazione !== 'diesel' && singleAuto.alimentazione !== 'diesel' ){
// // //             return true;
// // //         }
// // //     });
    
// // // console.log(otherAutos);

// // const gasAutos = [];
// // const dieselAutos = [];
// // const otherAutos = [];

// // // for (let index = 0; index < cars.length; index++) {
// // //     const element = cars[index];
    
// // //     if (element.alimentazione === 'benzina'){
// // //         gasAutos.push(element);
// // //     } else if (element.alimentazione === 'diesel'){
// // //         dieselAutos.push(element);
// // //     } else {
// // //         otherAutos.push(element);
// // //     }
// // // }

// // cars.forEach((element) => {
// //     if (element.alimentazione === 'benzina'){
// //         gasAutos.push(element);
// //     } else if (element.alimentazione === 'diesel'){
// //         dieselAutos.push(element);
// //     } else {
// //         otherAutos.push(element);
// //     }
// // });

// // console.log(gasAutos);
// // console.log(dieselAutos);
// // console.log(otherAutos);



// // Crea un array di oggetti che rappresentano delle persone, 10.
// // Ogni persona ha un nome, un cognome e un’eta.

// // Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’eta.
// // const persone = [
// //     {
// //         nome: "Gianna",
// //         cognome: "Sfregola",
// //         eta: 57,
// //     },
// //     {
// //         nome: "Paolo",
// //         cognome: "La Torre",
// //         eta: 32,
// //     },
// //     {
// //         nome: "Perseo",
// //         cognome: "Orione",
// //         eta: 24,
// //     },
// //     {
// //         nome: "Sandrino",
// //         cognome: "Panevino",
// //         eta: 15,
// //     },
// //     {
// //         nome: "Rinaldo",
// //         cognome: "Pane Caldo",
// //         eta: 68,
// //     },
// //     {
// //         nome: "Giulione",
// //         cognome: "Cesarone",
// //         eta: 8,
// //     },
// //     {
// //         nome: "Francesco",
// //         cognome: "Totti Re di Roma",
// //         eta: 47,
// //     },
// //     {
// //         nome: "Ciccio",
// //         cognome: "Impanato",
// //         eta: 12,
// //     },
// //     {
// //         nome: "Lina",
// //         cognome: "Deguata",
// //         eta: 17,
// //     },
// //     {
// //         nome: "Tornio",
// //         cognome: "Subito",
// //         eta: 87,
// //     },
// // ];

// // // ! (CONDIZIONE) ? 'VALORE_DI_VERO' : 'VALORE_DI_FALSO';

// // const personeModificate = persone.map((persona) => {
// //     return `${persona.nome} ${persona.cognome}, ${ (persona.eta >= 18) ? "puo guidare perche' maggiorenne" : "non puo' guidare perche' minorenne"  }` ;
// // });

// // console.log(persone);

// // console.log(personeModificate);

// // const guests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

// // const beautifiedGuests = guests.map((guest, index)=> {
// //     const guestObj = {
// //         tablename : 'Tavolo Vip',
// //         guestname: guest,
// //         place: index 
// //     };
// //     return guestObj;
// // });

// // console.log(beautifiedGuests);

// const students = [
//     {
//         id: 213,
//         name: "Giuseppina della Rovere", 
//         grades: 78,
//     },
//     {
//         id: 110,
//         name: "Paola Cortellessa",
//         grades: 96
//     },
//     {
//         id: 250,
//         name: "Andrea Mantegna",
//         grades: 48
//     },
//     {
//         id: 145,
//         name: "Gaia Borromini",
//         grades: 74
// //     },
// //     {
// //         id: 196, 
// //         name: "Luigi Grimaldello",
// //         grades: 68
// //     },
// //     {
// //         id: 102,
// //         name: "Piero della Francesca",
// //         grades: 50
// //     },
// //     {
// //         id: 120,
// //         name: "Francesca da Polenta",
// //         grades: 84
// //     }
// // ];

// // // > 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
// // // > 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// // // > 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// // const listaNomi = [];
// // const studentiBuoni = [];
// // const studentiBuoniNuovi = [];

// // students.forEach((student) => {
// //     listaNomi.push(student.name.toUpperCase());
    
// //     if (student.grades > 70){
// //         studentiBuoni.push(student);
// //         if ( student.id > 120){
// //             studentiBuoniNuovi.push(student);
// //         }
// //     }
// // });

// // // const listaNomi = students.map((student) => {
// // //     // student.name = student.name.toUpperCase(); 
// // //     return student.name.toUpperCase();
// // // });

// // // const studentiBuoni = students.filter((student) => student.grades > 70);

// // // const studentiBuoniNuovi = students.filter((student) => student.grades > 70 && student.id > 120);

// // console.log(students);
// // console.log(listaNomi);
// // console.log(studentiBuoni);
// // console.log(studentiBuoniNuovi);



	
// const student = {
//     name: 'Paolo',
//     age: 30,       
//     email: 'paolo@email.it',
// };

// // > const name = student.name;
// // < const age = student.age;
// // > const email = student.email;
// const {name, age, email} = student;

// console.log(name, age, email)

// // ! ...
// // ! Operatore spread
// // ! Esplode l'elemento che precede


// // ! operatore spread + parametro/argomento di una funzione === parametro REST 
// function somma(...numbers) {
//     let sum = 0;
//     numbers.forEach((number) => {
//         sum += number;
//     })
//     return sum;
// }      

// somma(1, 2, 3, 4, 5, 6); // ! let numbers = [ 1, 2, 3, 4, 5, 6]

// const obj = {name: 'palla', peso: 50};
// const copyObj = { obj, colore: 'blue'}; // < { { name: 'palla', peso: 50}, colore: blue}
// const copyObjSpread = { ...obj, colore: 'blue'}; // < { name: 'palla', peso: 50, colore: blue}

// console.log(copyObj); 
// console.log(copyObjSpread); 

// const array = [1, 2, 3, 4];
// const newArray = [array, 5, 6, 7]; // % [ [1, 2, 3, 4 ], 5, 6, 7]
// const newArrayTwo = [ ...array, 5, 6, 7]; // % [ 1, 2, 3, 4, 5, 6, 7 ]

// console.log(array);
// console.log(newArray);
// console.log(newArrayTwo);



// // Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// // Calcola quanto pesano tutte le zucchine.
// // Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// // Infine stampa separatamente quanto pesano i due gruppi di zucchine.
// const zucchinis = [
//     { varieta: 'Nera di Milano', peso: '341.23', lunghezza: '14.58' },
//     { varieta: 'Romanesca', peso: '287.45', lunghezza: '1.75' },
//     { varieta: 'Fiorentina', peso: '458.12', lunghezza: '2.36' },
//     { varieta: 'Tonda', peso: '132.67', lunghezza: '25.98' },
//     { varieta: 'Lunga fiorentina', peso: '376.54', lunghezza: '28.45' },
//     { varieta: 'Striata d\'Italia', peso: '231.78', lunghezza: '11.23' },
//     { varieta: 'Bianca triestina', peso: '314.89', lunghezza: '7.56' },
//     { varieta: 'Gialla', peso: '459.31', lunghezza: '12.67' },
//     { varieta: 'Rugosa friulana', peso: '278.44', lunghezza: '6.89' },
//     { varieta: 'Patisson', peso: '387.56', lunghezza: '2.12' }
// ];

// let weight = 0;
// const longZucchinis = [];
// const averageZucchinis = [];

// zucchinis.forEach((zucchina) => {
//     weight += Number.parseInt(zucchina.peso, 10);
//     if (zucchina.lunghezza > 8){
//         longZucchinis.push(zucchina);
//     } else {
//         averageZucchinis.push(zucchina);
//     }
// });

// console.log(weight, longZucchinis, averageZucchinis);



// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l’indice della tab aperta nell’array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }
// Il software deve guardare se c’è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

// ! SE un elemento si chiama come uno di questi ==> e' un social
const socials = [
    'Facebook',
    'Twitter',
    'Youtube',
    'Instagram'
];

const windowObj = {
    "tabs": [ "Facebook", "GitHub", "Gmail", 'Twitter', 'Facebook', 'Youtube', 'Instagram', 'Instagram', 'Instagram', 'Boolean', 'MioEsercizio', 'Google'],
    "activeTab": 4
};

const purgedTabs = purgeSocialTabs(windowObj.tabs);

let newActiveTab = 0;
if ( windowObj.activeTab > 0){
    if (windowObj.activeTab <= purgedTabs.length - 1 ){
        newActiveTab = windowObj.activeTab;
    }
} 

console.log({ tabs : purgedTabs, activeTab : newActiveTab });

function purgeSocialTabs(tabs){
    const newTabs = tabs.filter((tab)=>{
        let isThisAllowed = true;
    
        let index = 0;
        while ( isThisAllowed === true && index < socials.length ){
            console.log(index, socials[index]);
            if ( socials[index].toLowerCase() === tab.toLowerCase()){
                    isThisAllowed = false;
            }
            
            index++;
        }
    
        return isThisAllowed;
    });

    return newTabs;
}