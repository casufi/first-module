import React from 'react';

const Home = props => {
  return React.createElement("div", {
    className: "card"
  }, props.children);
};

export default Home;