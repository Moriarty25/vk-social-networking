import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/' element={<h2>Home</h2>} />
			<Route path='/about' element={<h2>About</h2>} />
		</Route>,
	),
);
