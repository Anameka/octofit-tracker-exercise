import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            🐙 OctoFit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#dashboard">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#leaderboard">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card">
              <div className="card-body text-center">
                <h1 className="card-title">Welcome to OctoFit Tracker</h1>
                <p className="card-text">
                  Track your fitness activities, compete with friends, and achieve your goals!
                </p>
                <button className="btn btn-primary btn-lg">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
