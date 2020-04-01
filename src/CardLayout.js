import React from 'react';

const CardLayout = props => {
	const style = {border: '2px' , backgroundColor:'white' , padding : '12px' , };
	return (
		<div className = "ui card" style = {{border: '2px solid black' , padding: '10px', width : '450px'}}>
			{props.children}
			<div className = "ui basic green button">Accept</div>
			<div className = "ui basic red button">Reject</div>
		</div>
	);
};

export default CardLayout;
