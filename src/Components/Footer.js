import logo from "../Assets/logo.jpg"

function Footer(){
    return (
        <footer>
            <img src={logo} width='400px' style={{display:'inline'}}></img>
            <p style={{display:'inline'}}>Copyright Little Lemon</p>
        </footer>
    )
}

export default Footer;