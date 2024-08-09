import SpecialCard from "./SpecialCard";
import bruschetta from '../Assets/bruschetta.jpg';
import greekSalad from '../Assets/greek salad.jpg';
import lemonCake from '../Assets/lemon dessert.jpg';
import './Specials.css';

const specialsList = [
    {name: 'Bruschetta', description: 'bread, tomato, olive oil', image: bruschetta},
    {name: 'Greek Salad', description: 'greens, cheese, dressing', image: greekSalad},
    {name: 'Lemon Cake', description: 'Lemon cake with a whipped merengue topping', image: lemonCake},
]

function Specials(){
    return (
        <div className="specials">
            <div className="specialHeader">
                <h1>Specials</h1>
            </div>
            <div></div>
            {specialsList.map((x) => <SpecialCard item={x}></SpecialCard>)}
        </div>
    )
}

export default Specials;