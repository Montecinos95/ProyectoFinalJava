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

// Funcion Porcentaje
function calcularPercentaje(valor, total) {
    if (total === 0 || valor === 0) {
        return 0;
    }
    return (valor / total) * 100;
}

// Función para escuchar los cambios en los input y evitar números negativos
function watchInputs(inputIDs) {
    inputIDs.forEach(id => {
        const inputElement = document.getElementById(id);
        inputElement.addEventListener('blur', function () {
            const trimmedValue = inputElement.value.trim();
            if (trimmedValue === '') {
                inputElement.value = 0;
            } else {
                const numericValue = parseFloat(trimmedValue);
                if (numericValue < 0) {
                    inputElement.value = 0;
                    // Actualizar outputInput a cero si se ingresa un número negativo
                    document.getElementById('outputInput').value = 0;
                    document.getElementById('outputT').value = 0;
                }
            }
        });
    });
}

// Función para sumar los valores de los input y mostrar el resultado en un output
function Suma(inputIDs, outputID) {
    const inputElements = inputIDs.map(id => parseFloat(document.getElementById(id).value) || 0);
    const suma = inputElements.reduce((total, value) => total + value, 0);
    document.getElementById(outputID).value = suma;
}

// Función para actualizar barra de progreso
function updateProgressBar(barId, progress) {
    const progressBar = document.getElementById(barId);
    progressBar.style.width = progress + '%';
}

// Función para restar los valores de los input y mostrar el resultado en un output
function Resta(inputIDs, outputID) {
    const inputElements = inputIDs.map(id => document.getElementById(id));
    const outputElement = document.getElementById(outputID);

    let resta = parseFloat(inputElements[0].value) || 0;

    inputElements.slice(1).forEach(input => {
        const value = parseFloat(input.value) || 0;
        resta -= value;
    });

    outputElement.value = resta;
}

// Función para cargar datos desde un archivo JSON local y asignarlos a los inputs
function cargarDatosDesdeJSON() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Actualizar los campos de entrada con los datos cargados desde el JSON
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const inputElement = document.getElementById(key);
                    inputElement.value = data[key];
                }
            }

            // Llamar a las funciones de Suma y Resta para actualizar los resultados
            Suma(['inputUS', 'inputDS'], 'outputInput');
            Suma(['inputUHogar', 'inputDHogar', 'inputTHogar', 'inputCHogar'], 'outputHogar');
            Suma(['inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT'], 'outputTrans');
            Suma(['inputUE', 'inputDE', 'inputTE'], 'outputEduc');
            Suma(['inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP', 'inputSGP', 'inputSIGP'], 'outputGP');
            Suma(['outputHogar', 'outputTrans', 'outputEduc', 'outputGP'], 'outputGT');
            Resta(['outputInput', 'outputGT'], 'outputT');

            // Actualizar Barra Progreso
            updateProgressBar('progreso1', calcularPercentaje(parseFloat(document.getElementById('outputHogar').value), parseFloat(document.getElementById('outputGT').value)));
            updateProgressBar('progreso2', calcularPercentaje(parseFloat(document.getElementById('outputTrans').value), parseFloat(document.getElementById('outputGT').value)));
            updateProgressBar('progreso3', calcularPercentaje(parseFloat(document.getElementById('outputEduc').value), parseFloat(document.getElementById('outputGT').value)));
            updateProgressBar('progreso4', calcularPercentaje(parseFloat(document.getElementById('outputGP').value), parseFloat(document.getElementById('outputGT').value)));

            // Cambiar Color de Output
            let valor = parseFloat(document.getElementById('outputT').value);
            if (valor <= 0) {
                document.getElementById('outputT').style.color = 'red';
            }
            else {
                document.getElementById('outputT').style.color = 'green';
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

// Inicializar los input a 0
ceroALosInputs(['inputUS', 'inputDS', 'inputUHogar', 'inputDHogar', 'inputTHogar', 'inputCHogar', 'inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT', 'inputUE', 'inputDE', 'inputTE', 'inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP', 'inputSGP', 'inputSIGP', 'outputInput', 'outputT', 'outputGT', 'outputHogar', 'outputTrans', 'outputEduc', 'outputGP']);

// Escuchar cambios en los input
watchInputs(['inputUS', 'inputDS', 'inputUHogar', 'inputDHogar', 'inputTHogar', 'inputCHogar', 'inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT', 'inputUE', 'inputDE', 'inputTE', 'inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP', 'inputSGP', 'inputSIGP']);

// Escuchar cambios en los input y realizar cálculos
document.addEventListener('input', function (event) {
    if (event.target.id.startsWith('input')) {
        Suma(['inputUS', 'inputDS'], 'outputInput');
        Suma(['inputUHogar', 'inputDHogar', 'inputTHogar', 'inputCHogar'], 'outputHogar');
        Suma(['inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT'], 'outputTrans');
        Suma(['inputUE', 'inputDE', 'inputTE'], 'outputEduc');
        Suma(['inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP', 'inputSGP', 'inputSIGP'], 'outputGP');
        Suma(['outputHogar', 'outputTrans', 'outputEduc', 'outputGP'], 'outputGT');
        Resta(['outputInput', 'outputGT'], 'outputT');


        // Actualizar Barra Progreso
        updateProgressBar('progreso1', calcularPercentaje(parseFloat(document.getElementById('outputHogar').value), parseFloat(document.getElementById('outputGT').value)));
        updateProgressBar('progreso2', calcularPercentaje(parseFloat(document.getElementById('outputTrans').value), parseFloat(document.getElementById('outputGT').value)));
        updateProgressBar('progreso3', calcularPercentaje(parseFloat(document.getElementById('outputEduc').value), parseFloat(document.getElementById('outputGT').value)));
        updateProgressBar('progreso4', calcularPercentaje(parseFloat(document.getElementById('outputGP').value), parseFloat(document.getElementById('outputGT').value)));
        
        let valor = parseFloat(document.getElementById('outputT').value);
        if (valor <= 0) {
            document.getElementById('outputT').style.color = 'red';
        }
        else {
            document.getElementById('outputT').style.color = 'green';
        }
    }
});

// Agregar un evento al botón para cargar los datos cuando se haga click
document.getElementById('cargarDatosButton').addEventListener('click', cargarDatosDesdeJSON);
