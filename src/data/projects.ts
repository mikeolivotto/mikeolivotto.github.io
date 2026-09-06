export interface Project {
  title: string;
  demoUrl?: string;
  githubUrl?: string;
  description: string;
  tech: string;
  features?: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "Concert Tracker",
    demoUrl: "",
    githubUrl: "https://github.com/mikeolivotto/concert-tracker",
    description: "An app for tracking live music events I have attended",
    tech: "Next.js 15 with Turbopack, React 19, TypeScript, PostgreSQL (Supabase), Drizzle ORM, Tailwind CSS, react-hook-form, Zod, Docker + Nginx",
    features:
      "Full concert logging with date/venue/artist tracking, chronological concert history with statistics, public profile sharing, text search with autocomplete, form validation.",
    img: "/img/concert-tracker.gif",
  },
  {
    title: "JB Price Checker",
    demoUrl: "https://mikeolivotto.com/jb-price-checker/",
    githubUrl: "https://github.com/mikeolivotto/jb-price-checker/",
    description:
      "Displays comprehensive and normally-hidden data on JB Hi Fi products across categories",
    tech: "React 18, TypeScript, Vite, Material-UI, Zustand, Chart.js",
    features:
      "Interactive data grid with sorting/filtering, price comparison with savings calculations, Discogs integration for music products, price history visualization",
    img: "/img/price-checker.gif",
  },
  {
    title: "MikeOlivotto.com - this site!",
    demoUrl: "https://mikeolivotto.com/",
    githubUrl: "https://github.com/mikeolivotto/mikeolivotto.github.io",
    description: "Personal website + portfolio",
    tech: "React, TypeScript, React Bootstrap, React Router",
    features:
      "Single-page application with client-side routing, responsive project showcase with cards, Google Analytics integration, custom 404 handling",
    img: "/img/mikeolivottodotcom.png",
  },
  {
    title: "Tune Geeks - Marketplace for Music",
    githubUrl: "https://github.com/mikeolivotto/tune-geeks",
    description: "A prototype marketplace to buy and sell music memorabilia.",
    tech: "Ruby on Rails w/ PostgreSQL, Heroku",
    features:
      "User authentication (Devise), file upload connected to Amazon S3, payment processing (Stripe)",
    img: "/img/tune_geeks.png",
  },
  {
    title: "Yvan Eht Nioj - Simpsons Meme Generator",
    demoUrl: "https://mikeolivotto.com/yvanehtnioj-meme-generator/",
    githubUrl: "https://github.com/mikeolivotto/yvanehtnioj-meme-generator",
    description:
      "Created over a single weekend to learn HTML5 Canvas functionality with JavaScript interactivity.",
    tech: "JavaScript, HTML, Bootstrap",
    features:
      "Dynamically-generated reverse text applied to HTML5 canvas, download a .png of the result",
    img: "/img/yvanehtnioj.gif",
  },
  {
    title: "React Markdown Previewer",
    demoUrl: "https://mikeolivotto.com/markdown-previewer/",
    githubUrl: "https://github.com/mikeolivotto/markdown-previewer",
    description: "A React app for previewing GitHub-flavoured markdown",
    tech: "React, HTML, CSS, Bootstrap, GitHub pages",
    features:
      "Parses markdown and immediately displays a preview of the result, including styled code snippets",
    img: "/img/markdown.gif",
  },
  {
    title: "Bitcoin Tracker",
    demoUrl: "https://mikeolivotto.com/bitcoin-tracker/",
    githubUrl: "https://github.com/mikeolivotto/bitcoin-tracker",
    description:
      "A bitcoin price tracker to display the last 30 days of BTC prices for any given currency",
    tech: "React, Chart.js, Bootstrap",
    features:
      "Dynamically re-render price chart upon selecting desired currency",
    img: "/img/bitcoin-tracker.png",
  },
  // {
  //   title: "Broken Bad - Explore Breaking Bad",
  //   demoUrl: "https://broken-bad.netlify.app/",
  //   description:
  //     "Built during a 24-hour challenge, this app connects to the Breaking Bad API to deliver key information on all characters and Episodes from Breaking Bad and Better Call Saul",
  //   tech: "React, SemanticUI, Netlify",
  //   features:
  //     "Dynamically filter/search characters, pull information on any given character or episode, random quotes",
  //   img: "/img/broken_bad.png",
  // },
  {
    title: "Trivia Time - Ruby CLI app",
    githubUrl: "https://github.com/mikeolivotto/t1a3",
    description: "A multiple-choice, terminal-based trivia app.",
    tech: "Ruby, RSpec testing suite",
    features:
      "3 difficulty modes, multi-choice, score keeping, display corrected answers at conclusion of game",
    img: "/img/trivia_time.png",
  },
  {
    title: "Happy Seizure - blog",
    demoUrl: "https://happyseizure.com/",
    githubUrl: "https://github.com/mikeolivotto/happy-seizure",
    description:
      "Personal blog documenting travels & music. Originally maintained in WordPress",
    tech: "Jekyll, Ruby",
    img: "/img/happyseizure.png",
  },
  {
    title: "Personal website",
    demoUrl: "https://mikeolivotto.com/pre-2021-personal-site/",
    githubUrl: "https://github.com/mikeolivotto/pre-2021-personal-site",
    description: "Original personal profile website, built in 2016",
    tech: "HTML, CSS, Materialize CSS",
    img: "./img/personalsite.png",
  },
];

export default projects;
