import '../style/PlanetItem.css'
import React, {useState} from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'


function PlanetItem({name, cover, id, category, price, description, apsis, artistic, cart, updateCart, simplifyPrice}) {

    const [showModal, setShowModal] = useState(false)

    function addToCart(name) {

        const currentPlanet = cart.find((planet) => planet.name === name)

        if (currentPlanet) {
            alert('there is only one '+name)
        } else {
            updateCart([...cart, { name, price }]);
        }

        
    }



    return (
        <>
        <li className="planetBox" key={id}> 
        <h2 onClick={() => setShowModal(true)}>{name.toUpperCase()}</h2>
        <p><i>{category}</i></p>
        <div className='img-box'>
        <img src={cover} alt={`${name} cover`} onClick={() => setShowModal(true)}/>
        </div>
        <p className="price">{simplifyPrice(price)} ¢</p>
        <button onClick={() => addToCart(name, price)}>Ajouter au panier</button>
        </li>
        {showModal && createPortal(
            <ModalContent 
            closeModal={() => setShowModal(false)}
            name={name}
            apsis={apsis}
            cover={cover}
            price={price}
            description={description}
            artistic={artistic}
            simplifyPrice={simplifyPrice}
            />, 
            document.body)} 
        </>
        )


}

export default PlanetItem