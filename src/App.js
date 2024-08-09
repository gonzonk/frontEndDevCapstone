import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer'
import BookingPage from './Components/BookingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='topBar'>
          <Header>

          </Header>
          <Nav>

          </Nav>
        </div>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/home' element={<Main />}></Route>
          <Route path='/reservations' element={<BookingPage />}></Route>
        </Routes>
        <Footer>

        </Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
