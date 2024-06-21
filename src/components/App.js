import '../style/App.css'
import Header from './Header'
import ShoppingPlanet from './ShoppingPlanet'
import Cart from './Cart'
import { useState } from 'react'

function App() {

  const [cart, updateCart] = useState([])

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
    <div className="App">

      <Header />
        <div className="layout">
          <Cart cart={cart} updateCart={updateCart} simplifyPrice={simplifyPrice}/>
          <ShoppingPlanet cart={cart} updateCart={updateCart} simplifyPrice={simplifyPrice}/>
        </div>

    </div>

  )
}

export default App;
