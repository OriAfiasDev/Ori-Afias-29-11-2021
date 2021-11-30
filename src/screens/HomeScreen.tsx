import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';

export const HomeScreen: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<div style={{ flex: 1, backgroundColor: '#ddd', height: 500 }}>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 30, width: '80%' }}>
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
		</div>
	);
};
