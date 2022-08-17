const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

const quotes = "./js/data.json";
const res = await fetch(quotes);
const data = await res.json();

export async function getQuotes() {

  function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  let p = randomInteger(1, data.quotes.length - 1);
  quoteText.textContent = data["quotes"][p].quote;
  quoteAuthor.textContent = data["quotes"][p].author;
}
changeQuote.addEventListener("click", function() {
    getQuotes();
});
