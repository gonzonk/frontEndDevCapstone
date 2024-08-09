import './Homepage.css'
import foodImage from '../Assets/restauranfood.jpg';


function Homepage(){
    return (
        <div className="callToAction">
            <div className='textHolder'>
                <h1>Little Lemon</h1>
                <p>Little Lemon is a medditeranean restaraunt located in Chicago, Illios</p>
            </div>
            <img src={foodImage}></img>
        </div>
    )
}

export default Homepage;