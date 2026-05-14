import React from 'react';
import './App.css';

const leaderboard = [
  {rank: 1, name: 'Mia Rivera', team: 'Team Kraken', points: 1420, trend: '+12%', activity: 'Running'},
  {rank: 2, name: 'Noah Chen', team: 'FitSquad', points: 1310, trend: '+9%', activity: 'Cycling'},
  {rank: 3, name: 'Sofia Kim', team: 'WaveRiders', points: 1250, trend: '+14%', activity: 'Strength'},
  {rank: 4, name: 'Leo Patel', team: 'Octo Crew', points: 1180, trend: '+7%', activity: 'Yoga'},
  {rank: 5, name: 'Avery Brooks', team: 'AquaFit', points: 1125, trend: '+11%', activity: 'Rowing'},
];

const profiles = [
  {name: 'Mia Rivera', title: 'Team Captain', description: 'Average 10k steps per day with strong strength work.', badge: 'Elite', points: 1420},
  {name: 'Noah Chen', title: 'Challenge Finisher', description: 'Loves cycling and community challenges.', badge: 'Pro', points: 1310},
  {name: 'Sofia Kim', title: 'Workout Wizard', description: 'Focused on balanced workouts and recovery.', badge: 'Champion', points: 1250},
];

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#home">
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
                <a className="nav-link" href="#leaderboard">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profiles">Profiles</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content container text-white text-center">
          <span className="hero-badge">Fitness gamification for students</span>
          <h1>Build healthy habits, track every workout, and climb the leaderboard.</h1>
          <p>OctoFit makes fitness fun for teams, students, and teachers with a game-like dashboard and real-time progress tracking.</p>
          <div className="hero-actions">
            <a href="#leaderboard" className="btn btn-primary btn-lg me-3">View Leaderboard</a>
            <a href="#profiles" className="btn btn-outline-light btn-lg">Meet Top Athletes</a>
          </div>
        </div>
      </header>

      <main className="page-container container">
        <section className="stats-grid mt-n8">
          <div className="stat-card">
            <span className="stat-title">Active Teams</span>
            <strong>14</strong>
            <p>Tracking team performance across weekly challenges.</p>
          </div>
          <div className="stat-card highlight">
            <span className="stat-title">Weekly Points</span>
            <strong>6,520</strong>
            <p>Encouraging consistent activity and friendly competition.</p>
          </div>
          <div className="stat-card">
            <span className="stat-title">Workouts Logged</span>
            <strong>260</strong>
            <p>Strength, cardio, yoga, and outdoor training sessions combined.</p>
          </div>
        </section>

        <section id="leaderboard" className="section-panel">
          <div className="section-header">
            <div>
              <p className="section-label">Leaderboard</p>
              <h2>Top performers this week</h2>
            </div>
            <span className="section-chip">Fitness leaderboard</span>
          </div>

          <div className="table-responsive">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Team</th>
                  <th>Points</th>
                  <th>Activity</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item) => (
                  <tr key={item.rank}>
                    <td>{item.rank}</td>
                    <td>{item.name}</td>
                    <td>{item.team}</td>
                    <td>{item.points}</td>
                    <td>{item.activity}</td>
                    <td className={item.trend.startsWith('+') ? 'trend positive' : 'trend negative'}>{item.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="profiles" className="section-panel">
          <div className="section-header">
            <div>
              <p className="section-label">Profiles</p>
              <h2>User profile cards</h2>
            </div>
            <span className="section-chip">Team leaders</span>
          </div>

          <div className="profile-grid">
            {profiles.map((profile) => (
              <article key={profile.name} className="profile-card">
                <div className="profile-avatar">{profile.name.split(' ').map(n => n[0]).join('')}</div>
                <div className="profile-body">
                  <div className="profile-header">
                    <h3>{profile.name}</h3>
                    <span className="badge">{profile.badge}</span>
                  </div>
                  <p className="profile-title">{profile.title}</p>
                  <p className="profile-description">{profile.description}</p>
                  <div className="profile-stats">
                    <div>
                      <span>Points</span>
                      <strong>{profile.points}</strong>
                    </div>
                    <div>
                      <span>Status</span>
                      <strong>{profile.badge}</strong>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
