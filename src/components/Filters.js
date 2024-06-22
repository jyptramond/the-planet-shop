import '../style/Filters.css'
import Categories from './Categories'
import Sorter from './Sorter'

function Filters({categories, setActiveCategory, activeCategory, sortingPlanet, updateSortingPlanet}) {

    return (
        <div className="category-layout">

                <Sorter 
                    sortingPlanet={sortingPlanet}
                    updateSortingPlanet={updateSortingPlanet}
                />

                <Categories
					categories={categories}
					setActiveCategory={setActiveCategory}
					activeCategory={activeCategory}
				/>

        </div>
    )
}

export default Filters