function Nav(){
    return (
        <nav className="nav">
            <ul style={{listStyleType:"none", margin:0, padding:0, overflow: 'hidden'}}>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/log-in">Log In</a></li>
            </ul>
        </nav>
    )
}

export default Nav;