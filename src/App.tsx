import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// ↓↓↓ Global Components
import Header from './components/Header/Header'
// ↓↓↓ Views
import Home from './view/Home/Home'
import Shop from './view/Shop/Shop'
import Profile from './view/Profile/Profile'


function App() {
  return (
    <>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/shop" element={<Shop />} />
					<Route path="/profile" element={ <Profile /> } />
				</Routes>
			</Router>
    </>
  );
}

export default App;
