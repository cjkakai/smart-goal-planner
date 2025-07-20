import React, { useEffect, useState } from 'react';
import GoalCard from '../components/GoalCard';

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
          <GoalCard key={goal.id} goal={goal} />
        ))
      )}
    </div>
  );
};

export default Home;
