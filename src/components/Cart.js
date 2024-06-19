import '../style/Cart.css'
import { useState } from 'react'

function Cart({ cart, updateCart }) {

    const [isOpen, setIsOpen] = useState(true)


    function removeFromCart(index) {
        
        const updatedCart = cart.filter((item, i) => i !== index);

        updateCart(updatedCart);
    }

return isOpen ? (

    <div className="cart-open">

        <div className="cartItems">
            <h2>Votre panier</h2>

            {cart.map(({ name }, index) => (

                <div key={`${name}-${index}`} className="cartList">
                    🌕 {name} 
                    <button onClick={() => removeFromCart(index)}>X</button>
                </div>

            ))}
        </div>

        <button className="closeCart" onClick={() => setIsOpen(false)}>Fermer</button>

    </div>



) : (

    <div className="cart-closed" onClick={() => setIsOpen(true)}>
    </div>

)
}

export default Cart