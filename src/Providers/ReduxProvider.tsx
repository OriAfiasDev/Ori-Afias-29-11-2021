import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../redux';

const store = createStore(reducers, composeWithDevTools());

export const ReduxProvider: React.FC = ({ children }) => <Provider store={store}>{children}</Provider>;
