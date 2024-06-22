import PlanetItem from './PlanetItem'
import Filters from './Filters'
import { planetList } from '../datas/planetList'
import '../style/ShoppingPlanet.css'
import { useState } from 'react'



function ShoppingPlanet({ cart, updateCart, simplifyPrice }) {

	const [activeCategory, setActiveCategory] = useState('');

	const [sortingPlanet, updateSortingPlanet] = useState(true);


	if (sortingPlanet) {
		planetList.sort((a, b) => a.position - b.position);
	}
	else {
		planetList.sort((a, b) => b.position - a.position);
	}

	const categories = planetList.reduce((acc, planet) => 
		acc.includes(planet.category) ? acc : acc.concat(planet.category), [])

    return (

        <div className="shoppingPlanet">
				
				<Filters
					categories={categories}
					setActiveCategory={setActiveCategory}
					activeCategory={activeCategory}
					sortingPlanet={sortingPlanet}
					updateSortingPlanet={updateSortingPlanet}
				/>

				<ul className="list">

						{planetList.map(({ id, cover, name, category, price, description, apsis, artistic }) =>

							activeCategory === '' || activeCategory === category ? (
								<div key={id}>
									<PlanetItem
										cover={cover}
										name={name}
										id={id}
										category={category}
										price={price}
										description={description}
										apsis={apsis}
										artistic={artistic}
										cart={cart} 
										updateCart={updateCart}
										simplifyPrice={simplifyPrice}
									/>
								</div>
						) : null 
					)}
				</ul>

			</div>


    )
}

export default ShoppingPlanet