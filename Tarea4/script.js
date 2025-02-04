function convertLength() {
    // Obtiene el valor de la cantidad ingresada
    const inputAmount = parseFloat(document.getElementById('inputAmount').value);
    // Obtiene la unidad seleccionada
    const inputUnit = document.getElementById('inputUnit').value;

    // Verifica si el valor ingresado es un número válido
    if (isNaN(inputAmount)) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    // Factores de conversión
    const conversionFactors = {
        M: { M: 1, CM: 100, MM: 1000 },      // 1 metro = 100 cm, 1 metro = 1000 mm
        CM: { M: 0.01, CM: 1, MM: 10 },      // 1 cm = 0.01 m, 1 cm = 10 mm
        MM: { M: 0.001, CM: 0.1, MM: 1 }     // 1 mm = 0.001 m, 1 mm = 0.1 cm
    };

    // Realiza las conversiones
    const mResult = inputAmount * conversionFactors[inputUnit].M;
    const cmResult = inputAmount * conversionFactors[inputUnit].CM;
    const mmResult = inputAmount * conversionFactors[inputUnit].MM;

    // Actualiza los resultados en el DOM
    document.getElementById('mResult').textContent = `${mResult.toFixed(2)} m`;
    document.getElementById('cmResult').textContent = `${cmResult.toFixed(2)} cm`;
    document.getElementById('mmResult').textContent = `${mmResult.toFixed(2)} mm`;
}