import PlanetItem from './PlanetItem'
import { planetList } from '../datas/planetList'
import '../style/ShoppingPlanet.css'



function ShoppingPlanet() {

	let planetSorted = planetList.sort((a, b) => a.position - b.position);



    return (

        <div>
				<ul className="list">
					{planetSorted.map(({ id, cover, name }) =>
						
								<PlanetItem
									cover={cover}
									name={name}
                                    id={id}
								/>
					)}
				</ul>
			</div>


    )
}

export default ShoppingPlanet