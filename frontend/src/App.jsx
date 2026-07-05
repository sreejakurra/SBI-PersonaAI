import './App.css'

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h2>🏦 PersonaAI</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">About</a>
        </div>
      </nav>

      <section className="hero">

        <div className="left">

          <span className="badge">
            SBI Hackathon 2026
          </span>

          <h1>
            AI Relationship Manager
            <br />
            for Intelligent Customer Acquisition
          </h1>

          <p>
            Welcome to PersonaAI — an Agentic AI assistant that understands
            customer needs, builds a Financial Identity Profile and recommends
            the most suitable SBI banking products through personalized
            conversations.
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

        <div className="right">

          <div className="phone">

            <div className="chat">

              <div className="bot">
                👋 Hello! I'm PersonaAI.
              </div>

              <div className="user">
                I'm looking for a savings account.
              </div>

              <div className="bot">
                Based on your profile,
                I recommend SBI Savings Plus Account.
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App