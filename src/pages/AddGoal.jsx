import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddGoal() {
  // Start with empty values
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [savedAmount, setSavedAmount] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      name,
      targetAmount: Number(targetAmount),
      savedAmount: Number(savedAmount),
      category,
      deadline,
      createdAt: new Date().toISOString().split("T")[0]
    };

    // Send data to JSON server
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal)
    })
      .then((res) => {
        if (res.ok) {
          navigate('/'); // Go back to Home page
        } else {
          alert("Something went wrong!");
        }
      });
  }

  return (
    <div className="content">
      <h2>Add New Goal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Goal Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div><br />

        <div>
          <label>Target Amount:</label><br />
          <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required />
        </div><br />

        <div>
          <label>Saved Amount:</label><br />
          <input type="number" value={savedAmount} onChange={(e) => setSavedAmount(e.target.value)} />
        </div><br />

        <div>
          <label>Category:</label><br />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div><br />

        <div>
          <label>Deadline:</label><br />
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
        </div><br />

        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}

export default AddGoal;
