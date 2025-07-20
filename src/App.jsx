import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/common/NavBar";
import Footer from './components/common/Footer';
import "../src/index.css"
import Home from './pages/Home';
import AddGoal from './pages/AddGoal';
import Deposit from './pages/Deposit';
import Overview from './pages/Overview';
import EditGoal from './pages/EditGoal';




const App = () => {
  return (
    <div>
        <NavBar />
        <main>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddGoal />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/edit/:id' element={<EditGoal />} />
        </Routes>
        <Footer />
        </main>
    </div>
  )
}

export default App