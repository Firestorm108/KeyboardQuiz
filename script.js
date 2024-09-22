function calculateResult() {
    const form = document.getElementById('quiz-form');
    const size = form.elements['size'].value;
    const switchType = form.elements['switch'].value;
    const features = form.elements['features'].value;

    let result = "Based on your preferences, you should get a ";

    // Determine keyboard size
    result += `${size} keyboard`;

    // Add switch type
    if (switchType) {
        result += ` with ${switchType} switches`;
    }

    // Add extra features
    if (features === 'yes') {
        result += ` and extra features like RGB lighting or media keys.`;
    } else {
        result += `.`;
    }

    // Display the result
    document.getElementById('result').innerText = result;
}
