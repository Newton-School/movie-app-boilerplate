import React, { useContext } from "react"
import MovieContext from "../contexts/MovieContext"

const PriceCalculator = () => {
	const { movies } = useContext(MovieContext)
	const handleClick = () => {
		alert(`You booked ${movies.totalSeats} and total is $ ${movies.totalSeats * movies.moviePrice}`)
	}
	return (
		<div>
			<p>Selected {movies.totalSeats} seats and the total price is ${movies.totalSeats * movies.moviePrice}</p>
			<button style={{
				width: '80px',
				height: '30px',
				color: '#000000', backgroundColor: 'white',
				textAlign: 'center',
				borderRadius: '5px',
				marginLeft: '70px'
			}} onClick={handleClick} id="btn"><a href="/" style={{ textDecoration: 'none' }}>BOOK</a></button>
		</div>
	)
}

export default PriceCalculator
