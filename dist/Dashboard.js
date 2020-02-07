import React from 'react';

const Dashboard = props => {
  return React.createElement("div", {
    className: "card"
  }, props.children);
};

export default Dashboard;