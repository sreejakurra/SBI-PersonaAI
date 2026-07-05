import "./App.css";

function App() {
  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">
          🏦 <span>PersonaAI</span>
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">Products</a>
          <a href="/">About</a>
        </nav>
      </header>

      <section className="hero">

        <div className="hero-left">

          <span className="tag">
            SBI Hackathon 2026
          </span>

          <h1>
            AI Relationship Manager
            <br />
            for Intelligent
            <br />
            Customer Acquisition
          </h1>

          <p>
            Personalized onboarding powered by Agentic AI.
            Understand customer goals, build financial identity,
            recommend the right SBI products and guide users
            through a seamless banking journey.
          </p>

          <div className="buttons">
            <button className="primary">
              Start Conversation
            </button>

            <button className="secondary">
              Learn More
            </button>
          </div>

        </div>

        <div className="hero-right">

          <div className="dashboard">

            <h3>👋 Welcome, Sreeja</h3>

            <div className="card">
              <h4>Financial Identity</h4>
              <p>Student • Beginner Investor</p>
            </div>

            <div className="card">
              <h4>Recommended</h4>
              <p>✔ SBI Savings Plus</p>
              <p>✔ Education Loan</p>
              <p>✔ SBI Life Insurance</p>
            </div>

            <div className="card">
              <h4>AI Status</h4>
              <p>Conversation Complete ✅</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;