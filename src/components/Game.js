import React, { Component } from 'react'
import {shuffler} from "./utilities"
import Card from './Card'

class Game extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cards: ["&#xf09a","&#xf09a","&#xf427","&#xf427",
'&#xf421','&#xf421','&#xf16d','&#xf16d',
'&#xf167','&#xf167','&#xf099','&#xf099',
'&#xf5be','&#xf5be','&#xf1a0','&#xf1a0',
'&#xf17a','&#xf17a','&#xf179','&#xf179'
					],
			duplicatedCards: [],
			randomCards: [],
			finalCards: [],
			selectedCards: []
		}
		this.start()
	}
	handleClick(name, index){
		if(this.state.selectedCards.length == 2){
			setTimeout(() =>{
				this.check()
			}, 750)
		}
		else {
			let card = {
				name,
				index
			}
			let finalCards = this.state.finalCards
			let cards = this.state.selectedCards
			finalCards[index].close = false
			cards.push(card)
			this.setState({
				selectedCards: cards,
				finalCards: finalCards
			})
			if(this.state.selectedCards.length == 2){
				setTimeout(() =>{
					this.check()
				}, 750)
			}
		}
	}

	check(){
		let finalCards = this.state.finalCards
		if((this.state.selectedCards[0].name == this.state.selectedCards[1].name) && (this.state.selectedCards[0].index != this.state.selectedCards[1].index)){

			finalCards[this.state.selectedCards[0].index].complete = true
			finalCards[this.state.selectedCards[1].index].complete = true
		}
		else {
			finalCards[this.state.selectedCards[0].index].close = true
			finalCards[this.state.selectedCards[1].index].close = true
		}
			this.setState({
				finalCards,
				selectedCards: []
			})
	}

	start(){
		let finalCards = []
		this.state.duplicatedCards = this.state.cards.concat(this.state.cards)
		this.state.randomCards = this.shuffle(this.state.duplicatedCards)

		this.state.randomCards.map((name,index) => {
			finalCards.push({
				name,
				close: true,
				complete: false,
				fail: false
			})
		})
		this.state.finalCards = finalCards
	}
	shuffle(array){
		let currentIndex = array.length, temporaryValue, randomIndex
		while (0 != currentIndex) {
			randomIndex = Math.floor(Math.random()*currentIndex)
			currentIndex -= 1
			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}
		return array
	}

	render() {
	return (
		<div className="gameContainer">
			{this.state.finalCards.map((card, index) => {
				return
					<Card card={card.name}
					click={() => {this.handleClick(card.name, index)}}
					close={card.close}
					complete={card.complete}
					/>
			})
			}
		</div>
	)
	}
}

export default Game