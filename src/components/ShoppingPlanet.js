import PlanetItem from './PlanetItem'
import PlanetDescription from './PlanetDescription'
import Categories from './Categories'
import { planetList } from '../datas/planetList'
import '../style/ShoppingPlanet.css'
import { useState } from 'react'



function ShoppingPlanet({ cart, updateCart }) {

	const [activeCategory, setActiveCategory] = useState('')
	const [planetWindow, openWindow] = useState(false)
	const [activePlanet, setActivePlanet] = useState('')

	planetList.sort((a, b) => a.position - b.position);

	const categories = planetList.reduce((acc, planet) => 
		acc.includes(planet.category) ? acc : acc.concat(planet.category), [])

    return (

        <div className="shoppingPlanet">
				
				<Categories
					categories={categories}
					setActiveCategory={setActiveCategory}
					activeCategory={activeCategory}
				/>

				<ul className="list">

						{planetList.map(({ id, cover, name, category, price }) =>

							activeCategory === '' || activeCategory === category ? (
								<div key={id}>
									<PlanetItem
										cover={cover}
										name={name}
										id={id}
										category={category}
										price={price}
										cart={cart} 
										updateCart={updateCart}
										planetWindow = {planetWindow}
										openWindow = {openWindow}
										activePlanet = {activePlanet}
										setActivePlanet = { setActivePlanet }
									/>
								</div>
						) : null 
					)}
				</ul>

				<PlanetDescription 
				planetWindow = { planetWindow }
				openWindow = { openWindow } 
				activePlanet = { activePlanet }
				setActiveCategory = {setActiveCategory}
				/>

			</div>


    )
}

export default ShoppingPlanet