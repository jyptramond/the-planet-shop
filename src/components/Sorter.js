import '../style/Sorter.css'

import { planetList } from '../datas/planetList'

function Sorter({sortingPlanet, updateSortingPlanet}) {

    function sorting() {
        updateSortingPlanet(!sortingPlanet)
        console.log('hey')
    }

    return sortingPlanet ? (
            <div className="sorter" onClick={() => sorting()} >⇊</div>
    ) : (
            <div className="sorter" onClick={() => sorting()} >⇈</div>
    )
}

export default Sorter