import React from 'react';

const GoalCard = ({ goal, onDelete, onEdit }) => {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;

  return (
    <div style={{ border: '1px solid black', margin: '20px', padding: '10px' }}>
      <h3>{goal.name}</h3>
      <p><strong>Category:</strong> {goal.category}</p>
      <p><strong>Target:</strong> ${goal.targetAmount}</p>
      <p><strong>Saved:</strong> ${goal.savedAmount}</p>
      <p><strong>Deadline:</strong> {goal.deadline}</p>

      <div style={{ background: '#eee', height: '10px', width: '100%', marginBottom: '10px' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '10px',
            background: 'green'
          }}
        ></div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => onEdit(goal)}>Edit</button>
        <button onClick={() => onDelete(goal.id)} style={{ background: 'red', color: 'white' }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
