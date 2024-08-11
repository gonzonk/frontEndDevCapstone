import BookingForm from "./BookingForm";

function BookingPage(props){
    return (
        <div className="bookingPage">
            <h1>Booking Page</h1>
            <BookingForm availableTimes={props.availableTimes} availableTimesReducer={props.availableTimesReducer} submitFunction={props.submitFunction}></BookingForm>
        </div>
    )
}

export default BookingPage;