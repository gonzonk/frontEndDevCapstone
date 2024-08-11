import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from "./Components/BookingPage";
import { Main, initializeTimes, updateTimes } from './Components/Main';

test('renders the booking form heading', () => {
  render(<BookingPage availableTimes={['17:00']}/>);
  const headingElement = screen.getByText('Booking Page')
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes form returns array of times', ()=>{
  expect(initializeTimes('2012-12-12')[0] === "17:00");
})

test('updateTimes returns the same value provided in the state', () => {
  expect(updateTimes(['17:00'], '2012-12-12')[0] === '17:00');
})
