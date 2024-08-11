import { useState } from "react";

function BookingForm(props){
    const [formData, setFormData] = useState({
        resDate: "2024-08-10",
        resTime: '17:00',
        guests: 1,
        occasion: 'Birthday',
    });

    return (
        <div className="bookingForm">
            <form onSubmit={(e)=>{
                    e.preventDefault()
                    props.submitFunction(formData)
                }}>
                <label for="res-date">Date</label>
                <input type="date" id='res-date' name='res-date' value={formData.resDate} onChange={(e) => {
                    setFormData({...formData, resDate: e.target.value});
                    props.availableTimesReducer(formData.resDate)
                }}></input>
                <label for="res-time">Time</label>
                <select id='res-time' name='res-time' value={formData.resTime} onChange={(e) => setFormData({...formData, resTime: e.target.value})}>
                    {props.availableTimes.map((x)=><option>{x}</option>)}
                </select>
                <label for="guests">Number of Guests</label>
                <input type="number" placeholder="1" min="1" max="10" id='guests' name='guests' value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})}></input>
                <label for="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={(e) => setFormData({...formData, occasion: e.target.value})}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Place Reservation"></input>
            </form>
        </div>
    )
}

export default BookingForm;