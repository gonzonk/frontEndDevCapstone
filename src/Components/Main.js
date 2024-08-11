import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { useReducer, useState } from "react";
import ConfirmedBooking from "./ConfirmedBooking";

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

function updateTimes(times, date){
    return fetchAPI(new Date(date));
}

function initializeTimes(date){
    return fetchAPI(new Date(date));
}



function Main(props){

    const navigate = useNavigate();

    function submitForm(formData){
        const confirmation = submitAPI(formData);
        if (confirmation) {
            navigate('/confirmed')
        }
    }

    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes('2012-12-12'))

    return (
        <main className="main" >
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/home' element={<Homepage />}></Route>
                <Route path='/reservations' element={<BookingPage availableTimes={availableTimes} availableTimesReducer={updateAvailableTimes} submitFunction={submitForm}/>}></Route>
                <Route path='/confirmed' element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}

export {Main, initializeTimes, updateTimes};