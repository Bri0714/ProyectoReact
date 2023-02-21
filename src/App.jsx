import './App.css'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <body>
      <nav>
        <Navbar/>
      </nav>
      <div className='item'>

        <ItemListContainer mensaje = " Bienvenido a tu Tienda de Deportes preferida. "/>
        
      </div>
    </body>
  )
}

export default App
