import { useState } from "react";

const defaultDate = new Date(2002, 5, 23);

function BookingForm(){
    const [formData, setFormData] = useState({
        resDate: new Date(2002, 5, 23),
        resTime: '17:00',
        guests: 1,
        occasion: 'Birthday',
    });

    return (
        <div className="bookingForm">
            <form>
                <label for="res-date">Date</label>
                <input type="date" id='res-date' name='res-date' value={formData.resDate} onChange={(e) => setFormData({...formData, resDate: e.target.value})}></input>
                <label for="res-time">Time</label>
                <select id='res-time' name='res-time'>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label for="guests">Number of Guests</label>
                <input type="number" placeholder="1" min="1" max="10" id='guests' name='guests'></input>
                <label for="occasion">Occasion</label>
                <select id="occasion" name="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Place Reservation"></input>
            </form>
        </div>
    )
}

export default BookingForm;