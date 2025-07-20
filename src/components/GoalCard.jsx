// src/components/GoalCard.jsx
import React from 'react';

const GoalCard = ({ goal }) => {
  return (
    <div style={{ border: '1px solid black', margin: '20px', padding: '5px' }}>
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
  );
};

export default GoalCard;
