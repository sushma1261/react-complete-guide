import React from 'react';

const Person = props => {
	return (
		<div>
			<div className = "img" style={{ padding: '10px', width: '450px'}}>
					<img alt = 'image1' height = '100px' width = '100px'/>
					<span className = "name" style = {{ padding : '10px' , position : 'absolute', height: '110px' ,width : '200px'  }}>
						<p style = {{fontSize: '20px'}}>{props.name}&nbsp;&nbsp;
						<span className = "time1">{props.cTime}</span></p>
						<span className = "comment">{props.comment}</span>
					</span>
				</div>
		</div>
	);
};
export default Person;