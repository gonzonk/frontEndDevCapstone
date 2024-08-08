import logo from "../Assets/logo.jpg"

function Header(){
    return (
        <header className="header">
            <img src={logo} width='40%'></img>
        </header>
    )
}

export default Header;