import React, {useState, createRef, useEffect} from 'react';

function Pad({ name, song, keycode, letter }) {
	const [audio] = useState(createRef())
	useEffect(() => {
		let a = window.addEventListener("keydown", (e) => {
			 if (e.keyCode === keycode) {
				 audio.current.play()
			 }
		 })
		return () => {
			a.removeEventListener()
		}
	}, [])
	return (
		<div><button onClick={() => audio.current.play()}>{name} {letter}</button>
			<audio src= {song} ref = {audio}></audio>
		</div>
	)
}
export default Pad