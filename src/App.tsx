import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Header from './components/Header/Header'
import Home from './view/Home/Home'
import Profile from './view/Profile/Profile'

function App() {
  return (
    <>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/profile" element={ <Profile /> } />
				</Routes>
			</Router>
    </>
  );
}

export default App;
