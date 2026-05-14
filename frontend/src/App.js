import React, { useState } from 'react';
import './App.css';

const initialLeaderboard = [
  {rank: 1, name: 'Mia Rivera', team: 'Team Kraken', points: 1420, trend: '+12%', activity: 'Running', dailySteps: 8600},
  {rank: 2, name: 'Noah Chen', team: 'FitSquad', points: 1310, trend: '+9%', activity: 'Cycling', dailySteps: 7400},
  {rank: 3, name: 'Sofia Kim', team: 'WaveRiders', points: 1250, trend: '+14%', activity: 'Strength', dailySteps: 6900},
  {rank: 4, name: 'Leo Patel', team: 'Octo Crew', points: 1180, trend: '+7%', activity: 'Yoga', dailySteps: 5200},
  {rank: 5, name: 'Avery Brooks', team: 'AquaFit', points: 1125, trend: '+11%', activity: 'Rowing', dailySteps: 6100},
];

const profiles = [
  {name: 'Mia Rivera', title: 'Team Captain', description: 'Average 10k steps per day with strong strength work.', badge: 'Elite', points: 1420},
  {name: 'Noah Chen', title: 'Challenge Finisher', description: 'Loves cycling and community challenges.', badge: 'Pro', points: 1310},
  {name: 'Sofia Kim', title: 'Workout Wizard', description: 'Focused on balanced workouts and recovery.', badge: 'Champion', points: 1250},
];

function App() {
  const [leaderboard, setLeaderboard] = useState(initialLeaderboard);
  const [selectedUser, setSelectedUser] = useState(initialLeaderboard[0].name);
  const [stepCount, setStepCount] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleStepSubmit = (event) => {
    event.preventDefault();
    const steps = Number(stepCount);

    if (!selectedUser || !steps || steps <= 0) {
      setStatusMessage('Please select a user and enter a valid step count.');
      return;
    }

    setLeaderboard((current) => {
      const updated = current.map((user) => {
        if (user.name !== selectedUser) {
          return user;
        }

        const pointsEarned = Math.floor(steps / 10);
        return {
          ...user,
          points: user.points + pointsEarned,
          dailySteps: user.dailySteps + steps,
          trend: `+${pointsEarned}%`,
        };
      });

      updated.sort((a, b) => b.points - a.points);
      return updated.map((user, index) => ({ ...user, rank: index + 1 }));
    });

    setStatusMessage(`${selectedUser} logged ${steps.toLocaleString()} steps and earned ${Math.floor(steps / 10)} points.`);
    setStepCount('');
  };

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

          <div className="step-form-wrapper">
            <form className="step-form" onSubmit={handleStepSubmit}>
              <div className="form-row">
                <label htmlFor="userSelect">Choose user</label>
                <select id="userSelect" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                  {leaderboard.map((user) => (
                    <option key={user.name} value={user.name}>{user.name} — {user.team}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="stepInput">Daily steps</label>
                <input
                  id="stepInput"
                  type="number"
                  min="0"
                  placeholder="Enter steps"
                  value={stepCount}
                  onChange={(e) => setStepCount(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Log Steps</button>
            </form>
            {statusMessage && <p className="form-status">{statusMessage}</p>}
          </div>

          <div className="table-responsive">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Team</th>
                  <th>Points</th>
                  <th>Steps</th>
                  <th>Activity</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item) => (
                  <tr key={item.name}>
                    <td>{item.rank}</td>
                    <td>{item.name}</td>
                    <td>{item.team}</td>
                    <td>{item.points}</td>
                    <td>{item.dailySteps.toLocaleString()}</td>
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
