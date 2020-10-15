import React, { Component, createRef } from "react";
import "./App.css";
import Drum_pads from './drum_pads'

class App extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<>
				<Drum_pads/>
			</>
		)
	}
}
 export default App