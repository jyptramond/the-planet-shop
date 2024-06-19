import '../style/PlanetItem.css'

function PlanetItem({name, cover, id, cart, updateCart}) {


    function addToCart(name) {

        const currentPlanet = cart.find((planet) => planet.name === name)

        if (currentPlanet) {
            alert('there is only one '+name)
        } else {
            updateCart([...cart, { name }]);
        }

        
    }


    return (
        <li className="planetBox" key={id} > 
        <h2>{name.toUpperCase()}</h2>
        <img src={cover} alt={`${name} cover`} />
        <button onClick={() => addToCart(name)}>Ajouter au panier</button>
        </li> )


}

export default PlanetItem