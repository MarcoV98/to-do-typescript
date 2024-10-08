import React from 'react';
import './style/App.scss';

import Form from './components/Form';
import List from './components/List';

const App: React.FC = () => {
	return (
		<div className="App">
			<section className="main">
			<h1 className="main__title">Welcome to your To Do List!</h1>
				<Form />
				<List />
			</section>
		</div>
	);
};

export default App;
