var quotes = [
    '"Controlling complexity is the essence of computer programming."<br>- Brian Kernigan',
    '"Our civilization depends critically on software; it had better be quality software."<br>- Bjarne Stroustrup',
    '"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." <br>- Unknown',
    '"The only valid measurement of code quality: wtfs/minute."<br>- Thom Holwerda'
];

var index = 0;

function initializeQuotes() {
    $("#quote").hide();
    $("#quote").fadeIn(500);
    updateQuote();
}

function updateQuote() {
    $("#quote").get(0).innerHTML = quotes[index];
    $("#quote").fadeIn(500);
}

function nextQuote() {
    index += 1;

    if (index > quotes.length - 1) {
        index = 0;
    }

    $("#quote").fadeOut(500, updateQuote);
}

initializeQuotes();
setInterval(nextQuote, 9000);