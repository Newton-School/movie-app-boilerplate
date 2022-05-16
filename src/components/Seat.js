import React, { useContext } from 'react'
import MovieContext from "../contexts/MovieContext"

import './styles/Seat.css'

const Seat = (props) => {
    const { movies } = useContext(MovieContext)
    const context = useContext(MovieContext)

    const seatNumber = props.seatno
    const seatStatus = props.seatColor ? props.seatColor : "seat-grey"

    const seatClickHandler = (event, seatNumber) => {
        event.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        if (movies.seatNumbers.includes(seatNumber)) {
            {/*Remove and add the seat-black, seat-grey class accordingly when seat is selected*/ }
        } else {
            //
        }
    }

    return (
        <div className="col-2 col-md-2">
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
                onClick={(e) => seatClickHandler(e, props.seatno)} />
        </div>
    )
}

export default Seat