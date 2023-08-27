

//inputUS
//inputDS
//outputInput

//inputUHogar
//inputDHogar
//inputTHogar
//inputCHogar
//outputHogar
//outputGT
//outputT
//inputUT
//outputTrans
//inputUE
//outputEduc
//inputUGP
//outputGP


function ceroALosInputs(inputIDs) {
    const inputElements = inputIDs.map(id => document.getElementById(id));

    inputElements.forEach(input => {
        input.value = 0;
    });
}




function Suma(inputIDs, outputID) {
    const inputElements = inputIDs.map(id => document.getElementById(id));
    const outputElement = document.getElementById(outputID);

    let Suma = 0;
    inputElements.forEach(input => {
        const value = parseFloat(input.value) || 0;
        Suma += value;
    });

    outputElement.value = Suma;
}




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


ceroALosInputs(['inputUS', 'inputDS', 'outputInput', 'inputUHogar','inputDHogar','inputTHogar','inputCHogar','outputHogar',
'inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT', 'outputTrans','inputUE', 'inputDE', 'inputTE', 'outputEduc',
'inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP','inputSGP', 'inputSIGP', 'outputGP',
'outputGT', 'outputT']);





document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        Suma(['inputUS', 'inputDS'], 'outputInput');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        Suma(['inputUHogar','inputDHogar','inputTHogar','inputCHogar'],'outputHogar');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        Suma(['inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT'], 'outputTrans');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        Suma(['inputUE', 'inputDE', 'inputTE'], 'outputEduc');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        Suma(['inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP','inputSGP', 'inputSIGP'], 'outputGP');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        Suma(['outputHogar', 'outputTrans', 'outputEduc', 'outputGP'], 'outputGT');
    }
});

document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        Resta(['outputInput', 'outputGT'], 'outputT');
    }
});