import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import Workspace from '../workspace/workspace';

const Routing = () =>
	<div>
		<BrowserRouter>
			<div>
				<Route exact path='/' component={Home} />
				<Route path='/documents/:documentId?' component={Workspace} />
			</div>
		</BrowserRouter>
	</div>;

export default Routing;