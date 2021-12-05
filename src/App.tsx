import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/favorites' element={<FavoritesScreen />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
