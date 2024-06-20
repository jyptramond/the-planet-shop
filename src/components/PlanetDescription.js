import '../style/PlanetDescription.css'


function PlanetDescription({planetWindow, openWindow, activePlanet, setActivePlanet}) {

    return planetWindow ? (
        <div className="window">
            <div>
                <h2>{activePlanet.name.toUpperCase()}</h2>
                <p className="apsis">({activePlanet.apsis} UA from the sun)</p>
                <img src={activePlanet.cover} alt={`${activePlanet.name} cover`}></img>
                <p>{activePlanet.description}</p>
                <button onClick={() => openWindow(false)}>Fermer la fenêtre</button>
            </div>
        </div>
    ) : (null)

}

export default PlanetDescription