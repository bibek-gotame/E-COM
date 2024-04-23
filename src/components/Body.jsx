import { Outlet } from 'react-router-dom'
import Header from './Header'
function Body() {
  return (
    <div>
        {/* <Header/> */}
        <Outlet/>
    </div>
  )
}

export default Body