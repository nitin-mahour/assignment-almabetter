import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './components/homepage'
import MarksInput from './components/marksinput'
import LeaderBoard from './components/leaderboard'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/marksinput' component={MarksInput} />
				<Route path='/leaderboard' component={LeaderBoard} />
			</Switch>
		</Router>
	);
}

export default App;
