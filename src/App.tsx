import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';

export interface IProps {
	// label: string;
}
export interface IState {
	count: number;
}

class App extends Component<IProps ,IState> {
	
	constructor(props: IProps) {
		super(props);
		this.state = {
			count: 0
		};
	}

	componentDidMount() {
		console.log('componentDidMount');
		axios.get('http://localhost:3001/series').then((res) => console.log(res));

	}

	render() {
		console.log('render');
		return (
			<div className="App">
				<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
					<div className="container">
						<div className="navbar-header page-scroll">
							<a className="navbar-brand page-scroll" href="#page-top">
								<img src="images/logo.png" height="30" />
							</a>
						</div>
			
						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav">
								<li>
									<a href="">Menu item  {this.state.count}</a>
								</li>
							</ul>
						</div>	
					</div>
				</nav>
		
				<section id="intro" className="intro-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h1><img src="images/logo.png" /></h1>
								<p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			);
		}
	}
	
	export default App;
	