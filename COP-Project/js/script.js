//API code - generate flower-related quotes
//API resource i used: https://github.com/lukePeavey/quotable
document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const button = document.getElementById("quotebtn");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
    var n = Math.floor(Math.random() * 10); //start with a random quote number from json file

    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/search/quotes?query=flowers");
        const data = await response.json();
        if (n <= 8) {
            n = n + 1;
        } else {
            n = 0;
        }
        console.log(n);
        if (response.ok) {
            // Update DOM elements
            quote.textContent = data.results[n].content;
            cite.textContent = `--` + data.results[n].author;

        } else {
            quote.textContent = "An error occured";
            console.log(data);
        }

    }

    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);
    // call updateQuote once when page loads
    updateQuote();
});



//add to basket

$(document).ready(function () {

    $('#onebuy').click(function () {
        $('#onebtm').addClass("clicked");
    });
    $('#onerem').click(function () {
        $('#onebtm').removeClass("clicked");
    });
    $('#twobuy').click(function () {
        $('#twobtm').addClass("clicked");
    });
    $('#tworem').click(function () {
        $('#twobtm').removeClass("clicked");
    });
    $('#threebuy').click(function () {
        $('#threebtm').addClass("clicked");
    });
    $('#threerem').click(function () {
        $('#threebtm').removeClass("clicked");
    });
    $('#fourbuy').click(function () {
        $('#fourbtm').addClass("clicked");
    });
    $('#fourrem').click(function () {
        $('#fourbtm').removeClass("clicked");
    });
    $('#fivebuy').click(function () {
        $('#fivebtm').addClass("clicked");
    });
    $('#fiverem').click(function () {
        $('#fivebtm').removeClass("clicked");
    });
    $('#sixbuy').click(function () {
        $('#sixbtm').addClass("clicked");
    });
    $('#sixrem').click(function () {
        $('#sixbtm').removeClass("clicked");
    });
    $('#sevenbuy').click(function () {
        $('#sevenbtm').addClass("clicked");
    });
    $('#sevenrem').click(function () {
        $('#sevenbtm').removeClass("clicked");
    });
    $('#eightbuy').click(function () {
        $('#eightbtm').addClass("clicked");
    });
    $('#eightrem').click(function () {
        $('#eightbtm').removeClass("clicked");
    });
});