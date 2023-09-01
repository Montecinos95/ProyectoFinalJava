// Creo los Arrays
let IngresoArray = [0, 0];
let GastoHogarArray = [0, 0, 0, 0];
let GastoTransArray = [0, 0, 0, 0, 0];
let GastoEduArray = [0, 0, 0];
let GastoPerArray = [0, 0, 0, 0, 0, 0, 0];

// Función para inicializar a 0 los input
function ceroALosInputs(inputIDs) {
    inputIDs.forEach(id => {
        document.getElementById(id).value = 0;
    });
}

// Función para escuchar los cambios en los input
function watchInputs(inputIDs) {
    inputIDs.forEach(id => {
        const inputElement = document.getElementById(id);
        inputElement.addEventListener('blur', function() {
            if (inputElement.value.trim() === '') {
                inputElement.value = 0;
            }
        });
    });
}

// Función para sumar los valores de los input y mostrar el resultado en un output
function Suma(inputIDs, outputID) {
    const inputElements = inputIDs.map(id => parseFloat(document.getElementById(id).value) || 0);
    const Suma = inputElements.reduce((total, value) => total + value, 0);
    document.getElementById(outputID).value = Suma;
}

// Función para restar los valores de los input y mostrar el resultado en un output
function Resta(inputIDs, outputID) {
    const inputElements = inputIDs.map(id => document.getElementById(id));
    const outputElement = document.getElementById(outputID);

    let Resta = parseFloat(inputElements[0].value) || 0; 

    inputElements.slice(1).forEach(input => {
        const value = parseFloat(input.value) || 0;
        Resta -= value;
    });

    outputElement.value = Resta;
}

// Inicializar los input a 0
ceroALosInputs(['inputUS', 'inputDS', 'inputUHogar', 'inputDHogar', 'inputTHogar', 'inputCHogar', 'inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT', 'inputUE', 'inputDE', 'inputTE', 'inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP', 'inputSGP', 'inputSIGP']);

// Escuchar cambios en los input
watchInputs(['inputUS', 'inputDS', 'inputUHogar', 'inputDHogar', 'inputTHogar', 'inputCHogar', 'inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT', 'inputUE', 'inputDE', 'inputTE', 'inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP', 'inputSGP', 'inputSIGP']);

// Escuchar cambios en los input y realizar cálculos
document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        Suma(['inputUS', 'inputDS'], 'outputInput');
        Suma(['inputUHogar', 'inputDHogar', 'inputTHogar', 'inputCHogar'], 'outputHogar');
        Suma(['inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT'], 'outputTrans');
        Suma(['inputUE', 'inputDE', 'inputTE'], 'outputEduc');
        Suma(['inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP', 'inputSGP', 'inputSIGP'], 'outputGP');
        Suma(['outputHogar', 'outputTrans', 'outputEduc', 'outputGP'], 'outputGT');
        Resta(['outputInput', 'outputGT'], 'outputT');
    }
});
