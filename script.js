

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





function updateSum(inputIDs, outputID) {
    const inputElements = inputIDs.map(id => document.getElementById(id));
    const outputElement = document.getElementById(outputID);

    let sum = 0;
    inputElements.forEach(input => {
        const value = parseFloat(input.value) || 0;
        sum += value;
    });

    outputElement.value = sum;
}









document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        updateSum(['inputUS', 'inputDS'], 'outputInput');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        updateSum(['inputUHogar','inputDHogar','inputTHogar','inputCHogar'],'outputHogar');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        updateSum(['inputUT', 'inputDT', 'inputTT', 'inputCT', 'inputQT'], 'outputTrans');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        updateSum(['inputUE', 'inputDE', 'inputTE'], 'outputEduc');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        updateSum(['inputUGP', 'inputDGP', 'inputTGP', 'inputCGP', 'inputCIGP','inputSGP', 'inputSIGP'], 'outputGP');
    }
});



document.addEventListener('input', function(event) {
    if (event.target.id.startsWith('input')) {
        updateSum(['outputHogar', 'outputTrans', 'outputEduc', 'outputGP'], 'outputGT');
    }
});