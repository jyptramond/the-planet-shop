import '../style/Header.css'
import logo from '../assets/logo.png'

function Header() {
    return (
        <div className="header"> 
        <img src={logo} alt='logo de stellar shop'></img>
        <h1> the_stellar_shop</h1>
        </div>
    )
}

export default Header