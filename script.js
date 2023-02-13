const quotesList = { "Tony Robbins": "If you do what you’ve always done, you’ll get what you’ve always gotten.", "Henry Ford": "Whether you think you can or you think you can’t, you’re right.", "Jesse Owens": "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.", "Albert Einstein": "Strive not to be a success, but rather to be of value.", "Theodore Roosevelt": "Believe you can and you’re halfway there.", "Chinese Proverb": "The best time to plant a tree was 20 years ago. The second best time is now.", "Audrey Hepburn": "Nothing is impossible, the word itself says, “I’m possible!”", "Oprah Winfrey": "You become what you believe.", "Confucius": "It does not matter how slowly you go as long as you do not stop.", "Anais Nin": "Life shrinks or expands in proportion to one’s courage." };

let randomQuoteKey = () => {
  let keys = Object.keys(quotesList);
  return keys[Math.floor(Math.random() * keys.length)];
};

$(document).ready(function () {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let quoteKey = randomQuoteKey();
  $("body, #new-quote").css("background-color", color);
  $("#text, #author, #tweet-quote").css("color", color);
  $("#text").text(quotesList[quoteKey]);
  $("#author").text(" -" + quoteKey);

  $("#new-quote").click(function () {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let currentKey = $("#author").text();

    //Loop to prevent repeating quotes
    let newQuoteKey = randomQuoteKey();
    while (" -" + newQuoteKey == currentKey) {
      console.log("repeat");
      newQuoteKey = randomQuoteKey();
    }

    $("#text").text(quotesList[newQuoteKey]);
    $("#author").text(" -" + newQuoteKey);
    $("body, #new-quote").css("background-color", color);
    $("#text, #author, #tweet-quote").css("color", color);
    $("#new-quote").css("color", "white");
  });

});