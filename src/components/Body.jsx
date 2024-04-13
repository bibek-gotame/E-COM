import { Outlet } from 'react-router-dom'
import {useGetProductList} from '../hooks/useGetProductList'
import Header from './Header'
function Body() {
  useGetProductList()
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Body