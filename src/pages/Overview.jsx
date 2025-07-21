// src/pages/Overview.jsx
import React, { useEffect, useState } from 'react';

const Overview = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('https://smart-goal-planner-yssi.onrender.com/goals')
      .then(res => res.json())
      .then(data => setGoals(data))
      .catch(error => console.error('Error fetching overview:', error));
  }, []);

  const totalGoals = goals.length;
  const totalTarget = goals.reduce((sum, goal) => sum + Number(goal.targetAmount), 0);
  const totalSaved = goals.reduce((sum, goal) => sum + Number(goal.savedAmount), 0);
  const averageProgress = totalGoals > 0 ? ((totalSaved / totalTarget) * 100).toFixed(2) : 0;

  return (
    <div className="content">
      <h2>Overview</h2>
      {totalGoals === 0 ? (
        <p>Loading overview...</p>
      ) : (
        <div>
          <p><strong>Total Goals:</strong> {totalGoals}</p>
          <p><strong>Total Target Amount:</strong> ${totalTarget}</p>
          <p><strong>Total Saved:</strong> ${totalSaved}</p>
          <p><strong>Average Progress:</strong> {averageProgress}%</p>
        </div>
      )}
    </div>
  );
};

export default Overview;
