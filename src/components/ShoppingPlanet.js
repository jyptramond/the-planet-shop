import PlanetItem from './PlanetItem'
import { planetList } from '../datas/planetList'
import '../style/ShoppingPlanet.css'



function ShoppingPlanet({ cart, updateCart }) {

	let planetSorted = planetList.sort((a, b) => a.position - b.position);



    return (

        <div>
				<ul className="list">
					{planetList.map(({ id, cover, name }) =>
							<div key={id}>
								<PlanetItem
									cover={cover}
									name={name}
                                    id={id}
									cart={cart} updateCart={updateCart}
								/>
							</div>
					)}
				</ul>
			</div>


    )
}

export default ShoppingPlanet