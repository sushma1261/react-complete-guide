import React from 'react';

const getSeason = (lat,month) => {
	return (month > 2 && month < 9) ? ((lat > 0) ? 'summer': 'winter') : ((lat > 0) ? 'winter': 'summer');
}


const SeasonsDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const icon = season === 'winter' ? 'snowflake' : 'sun';

	return (
		<div> 
			<i className = {`${icon} icon`} />
			<h1>
				{season === 'winter' ? 'Its Cold Outside' : 'Lets enjoy the heat'}
			</h1>
			<i className = {`${icon} icon`} />
			 
		</div>
		);
}

export default SeasonsDisplay;


/*<div className = "ui active dimmer" > 
			 	<div className = "ui big text loader">Loading.. </div>
			 </div>*/