import '../style/PlanetItem.css'

function PlanetItem({name, cover, id}) {

    return (
        <li className="planetBox" key={id} > 
        <h2>{name.toUpperCase()}</h2>
        <img src={cover} alt={`${name} cover`} />
        </li> )


}

export default PlanetItem