import React, {Component} from 'react';
// import Header from 'components/Header';
// import List from 'components/List/List';
import ConsoleImg from 'assets/img/console-top.png';


// const twoColListItems = [
//   { title: 'One' },
//   { title: 'Two' },
//   { title: 'Three' },
//   { title: 'Four' }
// ];

export default class Home extends Component {

	constructor(props){
		super(props);
		this.state = { count: 0 };
	}

	componentDidMount(){
		console.log('component will mount called on home');
		//debugger;
		this.interval = setInterval(() => {
			//debugger;
			this.setState({count: this.state.count + 1})
		}, 200);
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}

	render(){
		return(
			<article className="home">
				<img src={ConsoleImg} role='presentation'/>
			</article>
		);

	}
 
}
