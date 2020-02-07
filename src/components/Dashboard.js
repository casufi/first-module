import React from 'react';

const Dashboard = (props) => {
	return (
		<div className="card">
			{props.children}
		</div>
	);
};

export default Dashboard;
