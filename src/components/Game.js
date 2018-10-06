import React, { Component } from 'react'
import {shuffler} from "./utilities"

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

	onCardClick(clickedIndex) {
		const {selected, cards, correct} = this.state
		if (selected.length === 0) {
			this.setState({
				selected: [clickedIndex]
			})
		} else if (selected.length === 1) {
			if(cards[selected[0]] === cards[clickedIndex]) {
				this.setState({
					selected: [],
					correct: correct.concat([selected[0], clickedIndex])
				})
			}
			else {
				this.setState({
					selected: [selected[0], clickedIndex]
				})
				setTimeout(() => {
					this.setState({
						selected: []
					})
				}, 1500)
			}
		}
	}

	render() {
	return (
	
	)
	}
}

export default Game