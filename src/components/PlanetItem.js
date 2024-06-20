import '../style/PlanetItem.css'

import { planetList } from '../datas/planetList'

function PlanetItem({name, cover, id, category, price, cart, updateCart, planetWindow, openWindow, activePlanet, setActivePlanet}) {


    function addToCart(name) {

        const currentPlanet = cart.find((planet) => planet.name === name)

        if (currentPlanet) {
            alert('there is only one '+name)
        } else {
            updateCart([...cart, { name }]);
        }

        
    }

    function findActivePlanet(name) {
        const clickedPlanet = planetList.find((planet) => planet.name === name);
        setActivePlanet(clickedPlanet);
        console.log("activePlanet", activePlanet)

    }

    function simplifyPrice(price) {

        if (price >= 1000000000) {
            return price/1000000000+"G"
        }

        if (price >= 1000000) {
            return price/1000000+"M"
        }

        if (price >= 1000) {
            return price/1000+"K"
        }

        return price
    }


    return (
        <li className="planetBox" key={id}> 
        <h2>{name.toUpperCase()}</h2>
        <p><i>{category}</i></p>
        <img src={cover} alt={`${name} cover`} onClick={() => {findActivePlanet(name); openWindow(true)}} />
        <p className="price">{simplifyPrice(price)} ¢</p>
        <button onClick={() => addToCart(name)}>Ajouter au panier</button>
        </li> )


}

export default PlanetItem