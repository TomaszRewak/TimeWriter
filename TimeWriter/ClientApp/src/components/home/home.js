import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = props =>
	<div>
		<LinkContainer to={'/documents/1'}>
			<p><Glyphicon glyph='th-list' /> Docuemnt</p>
		</LinkContainer>
	</div>;

export default Home;