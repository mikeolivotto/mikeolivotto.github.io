const projects = [
  {
    title: "Tune Geeks",
    url: "https://tunegeeks.herokuapp.com/",
    description: "A prototype marketplace to buy and sell music memorabilia.",
    tech: "Ruby on Rails w/ PostgreSQL, Heroku",
    features: "User authentication (Devise), file upload connected to Amazon S3, payment processing (Stripe)",
    img: "/img/tune_geeks.png"
  },
  {
    title: "Yvan Eht Nioj - Simpsons Meme Generator",
    url: "https://yvanehtnioj.com/",
    description: "Created over a single weekend to learn HTML5 Canvas functionality with JavaScript interactivity.",
    tech: "JavaScript, HTML, Bootstrap",
    features: "Dynamically-generated reverse text applied to HTML5 canvas, download a .png of the result",
    img: "/img/yvanehtnioj.gif"
  },
  {
    title: "Markdown Previewer",
    url: "https://mikeolivotto.com/markdown-previewer/",
    description: "A React app for previewing GitHub-flavoured markdown",
    tech: "React, HTML, CSS, Bootstrap, GitHub pages",
    features: "Parses markdown and immediately displays a preview of the result, including styled code snippets",
    img: "/img/markdown.gif"
  },
  {
    title: "Bitcoin Tracker",
    url: "https://mikeolivotto.com/bitcoin-tracker/",
    description: "A bitcoin price tracker to display the last 30 days of BTC prices for any given currency",
    tech: "React, Chart.js, Bootstrap",
    features: "Dynamically re-render price chart upon selecting desired currency",
    img: "/img/bitcoin-tracker.png"
  },
  {
    title: "Broken Bad",
    url: "https://broken-bad.netlify.app/",
    description: "Built during a 24-hour challenge, this app connects to the Breaking Bad API to deliver key information on all characters and Episodes from Breaking Bad and Better Call Saul",
    tech: "React, SemanticUI, Netlify",
    features: "Dynamically filter/search characters, pull information on any given character or episode, random quotes",
    img: "/img/broken_bad.png"
  },
  {
    title: "Trivia Time",
    url: "https://github.com/mikeolivotto/t1a3",
    description: "A multiple-choice, terminal-based trivia app.",
    tech: "Ruby, RSpec testing suite",
    features: "3 difficulty modes, multi-choice, score keeping, display corrected answers at conclusion of game",
    img: "/img/trivia_time.png"
  },
  {
    title: "Personal website",
    url: "https://mikeolivotto.com/pre-2021-personal-site/",
    description: "Original personal profile website, built in 2016",
    tech: "HTML, CSS, Materialize CSS",
    img: "./img/personalsite.png"
  }
];


// {
//     title: "XXX",
//     url: "XXX",
//     description: "XXX",
//     tech: "XXX",
//     features: "XXX",
//     img: "./logo512.png"
//   },

export default projects;
