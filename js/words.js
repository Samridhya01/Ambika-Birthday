var words = new Array();
words.push("Happy Birthday, Ananya! May your day be filled with love, joy, and all your favorite things.");
words.push("Wishing you a fantastic birthday, Ananya! May all your dreams come true.");
words.push("Happy Birthday to the most amazing person I know. Enjoy your special day, Ananya!");
words.push("Ananya, may your birthday be as wonderful and extraordinary as you are. Have a great one!");
words.push("Sending you lots of love and happiness on your birthday, Ananya. Have a fantastic day!");
words.push("Happy Birthday, Ananya! May your year ahead be filled with success and happiness.");
words.push("Wishing you a birthday that's as special as you are, Ananya. Enjoy every moment!");
words.push("Ananya, may your birthday be the start of a year filled with good luck, good health, and much happiness.");
words.push("Happy Birthday, Ananya! Celebrate your day with joy and laughter.");
words.push("Ananya, on your special day, I wish you all the happiness in the world. Happy Birthday!");

function getRandomWord() {
    var idx = Math.random();
    idx = parseInt(100 * idx % words.length);
    return words[idx];
}