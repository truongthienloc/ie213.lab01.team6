import { RouterProvider } from 'react-router-dom';
import './App.css';
import { rootRoute } from './routes/rootRoute';

function App() {
	return <RouterProvider router={rootRoute} />;
}

export default App;
