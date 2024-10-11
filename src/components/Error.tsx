import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Error: React.FC = () => {
	return (
		<>
			<Navbar />
			<div className="error-page">
				<h1>An error occurred...</h1>
				<p>Sorry, your page does not exists!</p>
			</div>
			<Footer />
		</>
	);
};

export default Error;
