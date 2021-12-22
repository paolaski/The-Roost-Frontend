import React, { useState } from 'react';
import Calendar from 'react-calendar';


const Reservation = () => {
	const [value, onChange] = useState(new Date())
	return (

		<>
			<div className="reservationContainer">
				<div className="reservationContainer__division">
					<div className="reservationContainer__division__section">
						<Calendar onChange={onChange} value={value} />

					</div>
				</div>
				<div className="reservationContainer__division">
					<label htmlFor="telInput">Phone number</label>
					<input type="tel" id="telInput" />
					<label htmlFor="clientesInput">How many</label>
					<input type="number" id="clientesInput" />
					<label htmlFor="commentsTxt">Observations</label>
					<textarea name="" id="commentsTxt"></textarea>
					<button>Button</button>
				</div>
			</div>
		</>
	);
}
export default Reservation;
