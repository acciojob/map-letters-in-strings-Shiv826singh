function mapLetters(word) {
    const result = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (!result[letter]) {
            result[letter] = [];
        }

        result[letter].push(i);
    }

    return result;
}


// Get HTML elements
const wordInput = document.getElementById("wordInput");
const mapButton = document.getElementById("mapButton");
const output = document.getElementById("output");


// Button click
mapButton.addEventListener("click", function () {
    const word = wordInput.value;

    const result = mapLetters(word);

    output.textContent = JSON.stringify(result, null, 2);
});
