import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// ↓↓↓ Global Components
import Header from './components/Header/Header'
// ↓↓↓ Views
import Home from './view/Home/Home'
import Shop from './view/Shop/Shop'
import Profile from './view/Profile/Profile'
import Menu from './view/Menu/Menu'
import Footer from './components/Footer/Footer';
import Reservations from './view/Reservations/Reservations'
import Legal from './view/Legal/Legal'



function App() {
  return (
    <>
			<Router>
			<Header />
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/shop" element={<Shop />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/reservations" element={<Reservations />} />
					<Route path="/profile" element={ <Profile /> } />
					<Route path="/legal" element={ <Legal /> } />
					{/* <Route path="/privacy" element={ <Privacy /> } /> */}
				</Routes>
			</Router>
			<Footer/>
    </>
  );
}

export default App;
