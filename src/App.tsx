import * as React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import ChatPage from './pages/chat/index';
import { PrivateRoute } from '../src/utils/PrivateRoute';

class App extends React.Component<any, any> {

	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact 
						path='/login' 
						component={ChatPage} 
					/>
					<Route exact 
						path='/register' 
						component={ChatPage} 
					/>
					<PrivateRoute exact 
						path='/chat' 
						component={ChatPage}
					>
					</PrivateRoute>
				</Switch>
			</HashRouter>
		);
	}
}

export default App;