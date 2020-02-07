import React from 'react';

const Home = (props) => {
	return (
		<div className="card">
			{props.children}
		</div>
	);
};

export default Home;
