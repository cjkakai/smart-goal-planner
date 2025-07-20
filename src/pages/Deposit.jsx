// src/pages/Deposit.jsx
import React, { useState, useEffect } from 'react';

const Deposit = () => {
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const goal = goals.find(g => g.id === selectedGoalId);
    if (!goal) return alert("Please select a goal");

    const updatedAmount = Number(goal.savedAmount) + Number(amount);

    fetch(`http://localhost:3000/goals/${selectedGoalId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ savedAmount: updatedAmount }),
    })
      .then(res => {
        if (res.ok) {
          alert('Deposit successful!');
          setAmount('');
          setSelectedGoalId('');
        } else {
          throw new Error('Deposit failed');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Something went wrong');
      });
  };

  return (
    <div className="content">
      <h2>Deposit to a Goal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Goal:
          <select
            value={selectedGoalId}
            onChange={(e) => setSelectedGoalId(e.target.value)}
          >
            <option value="">Choose a goal</option>
            {goals.map(goal => (
              <option key={goal.id} value={goal.id}>
                {goal.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
};

export default Deposit;
