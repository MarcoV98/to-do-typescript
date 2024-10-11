import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.scss';

import Navbar from './components/Navbar';
import Homepage from './pages/homepage.page';
import AccessiblePage from './pages/accessiblePage.page';
import CreditsPage from './pages/creditsPage.page';
import Footer from './components/Footer';

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/accessible" element={<AccessiblePage />} />
					<Route path="/credits" element={<CreditsPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
