import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style/App.scss';
import './utils/i18n';

import RootLayout from './pages/root.pages';
import ErrorPage from './pages/errorPage.page';
import Homepage from './pages/homepage.page';
import AccessiblePage from './pages/accessiblePage.page';
import CreditsPage from './pages/creditsPage.page';
<<<<<<< Updated upstream

=======
import PokedexPage from './pages/pokedexPage.page';
import ConsolePage from './pages/consolePage.page';
>>>>>>> Stashed changes
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Homepage /> },
			{ path: '/accessible', element: <AccessiblePage /> },
			{ path: '/credits', element: <CreditsPage /> },
<<<<<<< Updated upstream
=======
			{ path: '/pokedex', element: <PokedexPage /> },
			{ path: '/console', element: <ConsolePage /> },
>>>>>>> Stashed changes
		],
	}
]);

const App: React.FC = () => {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
