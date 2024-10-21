import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style/App.scss';
import './utils/i18n';

import RootLayout from './pages/root.pages';
import ErrorPage from './pages/errorPage.page';
import Homepage from './pages/homepage.page';
import AccessiblePage from './pages/accessiblePage.page';
import CreditsPage from './pages/creditsPage.page';
import PokedexPage from './pages/pokedexPage.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Homepage /> },
			{ path: '/accessible', element: <AccessiblePage /> },
			{ path: '/credits', element: <CreditsPage /> },
			{ path: '/pokedex', element: <PokedexPage /> },
		],
	},
]);

const App: React.FC = () => {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
