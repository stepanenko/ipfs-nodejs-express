import '../styles/hero.css'

function Hero() {
  return (
    <div className="hero">
      <header className="hero-header">
        <a
          className="hero-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="hero-link"
          href="https://github.com/typescript-cheatsheets/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          React+TypeScript Cheatsheets
        </a>
      </header>
    </div>
  );
}

export default Hero;
