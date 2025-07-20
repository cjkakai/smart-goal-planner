// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  return (
    <div className="content">
      <h2>My Goals</h2>
      {goals.length === 0 ? (
        <p>Loading goals...</p>
      ) : (
        goals.map((goal) => (
          <div key={goal.id} style={{ border: '1px solid black', margin: '20px', padding: '5px' }}>
            <h3>{goal.name}</h3>
            <p><strong>Category:</strong> {goal.category}</p>
            <p><strong>Target:</strong> ${goal.targetAmount}</p>
            <p><strong>Saved:</strong> ${goal.savedAmount}</p>
            <p><strong>Deadline:</strong> {goal.deadline}</p>
            <div style={{ background: '#eee', height: '10px', width: '100%' }}>
              <div
                style={{
                  width: `${(goal.savedAmount / goal.targetAmount) * 100}%`,
                  height: '10px',
                  background: 'green'
                }}
              ></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
