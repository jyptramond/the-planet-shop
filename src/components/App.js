import '../style/App.css'
import Header from './Header'
import ShoppingPlanet from './ShoppingPlanet'
import Cart from './Cart'
import { useState } from 'react'

function App() {

  const [cart, updateCart] = useState([])

  return (
    <div className="App">

      <Header />
        <div className="layout">
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingPlanet cart={cart} updateCart={updateCart} />
        </div>

    </div>

  )
}

export default App;
