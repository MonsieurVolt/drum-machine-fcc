import React, { Component, lazy } from 'react'
import bankOne from './utils'
import Pad from './Pad'
class Drum_pads extends Component{
	constructor(props) {
		super(props)
		this.state = {
			pads : bankOne
		}
	}
	render() {
		return (
			<div>
				{this.state.pads.map(elem => <Pad name={elem.name} song={elem.url_2} keycode={elem.keyCode} letter={elem.keyTrigger}/>)}
			</div>
		)
	}
}
export default Drum_pads