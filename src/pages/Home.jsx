import React, { useEffect, useState } from 'react';
import GoalCard from '../components/GoalCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [goals, setGoals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://smart-goal-planner-yssi.onrender.com/goals')
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://smart-goal-planner-yssi.onrender.com/goals/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== id));
        }
      })
      .catch((err) => console.error("Error deleting goal:", err));
  };

  const handleEdit = (goal) => {
    navigate(`/edit-goal/${goal.id}`, { state: goal });
  };

  return (
    <div className="content">
      <h2>My Goals</h2>
      {goals.length === 0 ? (
        <p>Loading goals...</p>
      ) : (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
};

export default Home;
