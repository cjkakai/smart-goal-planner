// src/pages/EditGoal.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditGoal = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goal = location.state; // goal was passed from Home.jsx

  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [savedAmount, setSavedAmount] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    if (goal) {
      setName(goal.name);
      setTargetAmount(goal.targetAmount);
      setSavedAmount(goal.savedAmount);
      setCategory(goal.category);
      setDeadline(goal.deadline);
    }
  }, [goal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGoal = {
      ...goal,
      name,
      targetAmount: Number(targetAmount),
      savedAmount: Number(savedAmount),
      category,
      deadline,
    };

    fetch(`https://smart-goal-planner-yssi.onrender.com/goals/${goal.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => {
        if (res.ok) {
          navigate('/'); // Go back to home after update
        } else {
          alert('Update failed');
        }
      })
      .catch((err) => console.error("Error updating goal:", err));
  };

  if (!goal) return <p>Goal data not found</p>;

  return (
    <div className="content">
      <h2>Edit Goal</h2>
      <form onSubmit={handleSubmit}>
        <label>Goal Name:</label><br />
        <input value={name} onChange={(e) => setName(e.target.value)} required /><br />

        <label>Target Amount:</label><br />
        <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required /><br />

        <label>Saved Amount:</label><br />
        <input type="number" value={savedAmount} onChange={(e) => setSavedAmount(e.target.value)} /><br />

        <label>Category:</label><br />
        <input value={category} onChange={(e) => setCategory(e.target.value)} required /><br />

        <label>Deadline:</label><br />
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required /><br /><br />

        <button type="submit">Update Goal</button>
      </form>
    </div>
  );
};

export default EditGoal;
