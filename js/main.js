function generateQuote() {
    const quotes = [
        { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
        { quote: "So many books, so little time.", author: "Frank Zappa" },
        { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
        { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" }
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex].quote;
    const author = quotes[randomIndex].author;
    document.getElementById("quote").textContent = `"${quote}"`;
    document.getElementById("author").textContent = `--${author}`;
}