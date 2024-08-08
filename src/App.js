import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer'

function App() {
  return (
    <>
      {/* <div style={{backgroundColor:'aqua', style:'grid'}}>
        Header1
      </div>
      <div style={{backgroundColor:'red'}}>
        Header2
      </div> */}
      <div className='topBar'>
        <Header>

        </Header>
        <Nav>

        </Nav>
      </div>
      <Main>

      </Main>
      <Footer>

      </Footer>
    </>
  );
}

export default App;
