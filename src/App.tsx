import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<HomeScreen />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
