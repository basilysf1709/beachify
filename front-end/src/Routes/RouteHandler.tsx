import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Restaurants from '../components/Restaurants/Restaurants'
import Find from '../components/Find/Find'
import Plans from '../components/Plans/Plans'

const RouteHandler = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/restaurants' element={<Restaurants />} />
        <Route path='/find' element={<Find />} />
        <Route path='/plans' element={<Plans />} />
    </Routes>
  )
}

export default RouteHandler