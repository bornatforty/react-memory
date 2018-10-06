import React, { Component } from 'react'

class Game extends Component {
	const images = ["&#xf09a","&#xf09a","&#xf427","&#xf427",
'&#xf421','&#xf421','&#xf16d','&#xf16d',
'&#xf167','&#xf167','&#xf099','&#xf099',
'&#xf5be','&#xf5be','&#xf1a0','&#xf1a0',
'&#xf17a','&#xf17a','&#xf179','&#xf179'
]
	constructor(props) {
		super(props)
		this.state = {
			cards: shuffler(images.slice()),
			selected: [],
			correct: []
		}
	}

	render() {
	return (
	
	)
	}
}

export default Game