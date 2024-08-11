import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Nav from './Components/Nav';
import { Main }from './Components/Main';
import Footer from './Components/Footer'
import BookingPage from './Components/BookingPage';

function App() {
  return (
    <>
      <div className='topBar'>
        <Header>

        </Header>
        <Nav>

        </Nav>
      </div>
      <BrowserRouter>
        <Main>

        </Main>
      </BrowserRouter>
      <Footer>

      </Footer>
    </>
  );
}

export default App;
