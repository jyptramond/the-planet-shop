import '../style/Cart.css'
import { useState } from 'react'
import menuicon from '../assets/menu-icon.png'

function Cart({ cart, updateCart, simplifyPrice }) {

    const [isOpen, setIsOpen] = useState(true)

    const total = cart.reduce((acc, planet) => acc + planet.price, 0);

    function removeFromCart(index) {
        
        const updatedCart = cart.filter((item, i) => i !== index);

        updateCart(updatedCart);
    }

return isOpen ? (

    <div className="cart-open">

        <div className="cartItems">
            <h2>Votre panier</h2>

            {cart.map(({ name, price }, index) => (

                <div key={`${name}-${index}`} className="cartList">
                    <p>🌕 <strong>{name}</strong> | <span>{simplifyPrice(price)} ¢</span></p>
                    <button className='close' onClick={() => removeFromCart(index)}>X</button>
                </div>

            ))}
        </div>

            <p className='total'>Total: {simplifyPrice(total)} ¢</p>

            <button className="buttons-cart" onClick={() => updateCart([])}>Vider le panier</button>
            <button className="buttons-cart button-down" onClick={() => setIsOpen(false)}>Fermer le panier</button>
        

    </div>



) : (

    <div className="cart-closed" onClick={() => setIsOpen(true)}><img className='icon' src={menuicon} alt={`ouvrir le panier`}></img>
    </div>

)
}

export default Cart