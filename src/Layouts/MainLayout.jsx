import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const MainLayout = () => {
  return (
    <div className='bg-green-50'>

      <Navbar/>
      <div className=' min-h-[calc(100vh-68px)] pt-5 '>

        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
