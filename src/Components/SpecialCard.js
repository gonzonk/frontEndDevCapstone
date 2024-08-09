import './SpecialCard.css'

function SpecialCard(props){
    return (
        <div className="specialCard">
            <img src={props.item.image}></img>
            <h1>{props.item.name}</h1>
            <p>{props.item.description}</p>
        </div>
    )
}

export default SpecialCard;