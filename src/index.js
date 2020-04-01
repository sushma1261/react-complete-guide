import React from 'react';
import ReactDOM from 'react-dom';
//import '';
import SeasonsDisplay from './SeasonsDisplay';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {lat : null, errorM: ""};

		window.navigator.geolocation.getCurrentPosition(
				(position) =>  {
					this.setState({lat : position.coords.latitude})
				},
				(err) => {
					this.setState({errorM : err.message})
				}
			);

	}


	render() {
			if(this.state.errorM && !this.state.lat) {
				return <div> Error : {this.state.errorM}</div>
			}
			if(this.state.lat && !this.state.errorM)  {
				return (
					<div> Latitude : {this.state.lat}
					<SeasonsDisplay lat = {this.state.lat} />
				 	</div>
				 );
			}
			return(
			 <div> 
			 	Loading...
			 </div>


			);
		};
}

ReactDOM.render(<App />,document.querySelector('#root'));