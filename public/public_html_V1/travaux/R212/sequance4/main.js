

// je localise le bouton =
const equalsButton = document.querySelector('[data-equals]')
// 1 - je localise mon bouton effacer
const clearButton = document.querySelector('[data-all-clear]')
const output = document.querySelector('[data-output]')
// je localise les boutons d'opération
const operationButtons = document.querySelectorAll('[data-operation]')
// 1 - je localise mes boutons 0-9-.
const numberButtons = document.querySelectorAll('[data-number]')


// 2 - je regarde ce que je récupère
console.log(numberButtons)
console.log(clearButton)


// 2 - je surveille si on clique dessus
clearButton.addEventListener('click', ()=> {
    clear();
})





// On défini la fonction effacer
function clear() {
    output.innerText=''
    OperationCalcul = undefined
}


// On surveille le clique sur un des boutons 0-9 ou .
numberButtons.forEach(button => { // Pour chaque bouton
    button.addEventListener('click', () => { // On créer un detecteur
        console.info(button.innerText) // au clique, on affiche le contenu du btn dans la console
        appendNumber(button.innerText) // Et on ajoute son contenu à l’écran
    })
})



function appendNumber(number) {
    console.info(number)
    output.innerText += number
}



// // On surveille le clique sur un des boutons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText)
    })
})


// fonction qui affiche le signe de l'opération dans la zone "output"
function chooseOperation(operation) {
    output.innerText = output.innerText.toString() + ' ' + operation + ' '
}


// declaration de la variable à mettre en tout debut de script
var OperationCalcul = undefined
// fonction qui affiche le signe de l'opération dans la zone "output/

function chooseOperation(operation) {
    if( output.innerText.includes('x') || output.innerText.includes('+') || output.innerText.includes('÷')|| output.innerText.includes('-')) calcul()
    OperationCalcul = operation
    output.innerText = output.innerText.toString() + ' ' + operation + ' '
}



equalsButton.addEventListener('click', button => {
    calcul()
})


function calcul() {
    

    
    // si rien de saisie, on arrete la le caclul
    if(output.innerText === '') return 
    let split = output.innerHTML.split(OperationCalcul)
    
     // recupération des 2 valeurs
     let nombre1 = parseFloat(split[0])
     let nombre2 = parseFloat(split[1])
     
     // verification qu'il y a bien eu des valeurs de saisies
     if (isNaN(nombre1) || isNaN(nombre2)) return

     console.log(nombre1)
     console.log(nombre2)
     console.log(OperationCalcul)


  let moncalcul;
    
    switch (OperationCalcul) {
        case '+':
            moncalcul =  nombre1 + nombre2 
            break
        case '-':
            moncalcul =  nombre1 - nombre2 
            break
        case 'x':
            moncalcul =  nombre1 * nombre2 
            break
        case '÷':
            moncalcul =  nombre1 / nombre2 
            break
            case '%':
            moncalcul =  nombre1 %  nombre2 
            break
        default:
            return
    }
     //console.info(moncalcul)
     output.innerText = moncalcul
     OperationCalcul = undefined
}

// Je localise le bouton pourcentage
const percentageButton = document.querySelector('[data-operation="%"]');

// J'ajoute un écouteur d'événements pour le clic sur le bouton pourcentage
percentageButton.addEventListener('click', () => {
    calculatePercentage();
});

// Fonction pour calculer le pourcentage
function calculatePercentage() {
    // Si rien n'est saisi, on arrête le calcul
    if (output.innerText === '') return;

    // On récupère le nombre actuel
    let currentNumber = parseFloat(output.innerText);

    // On divise le nombre actuel par 100 pour obtenir le pourcentage
    let result = currentNumber / 100;

    // On affiche le résultat
    output.innerText = result;
}



