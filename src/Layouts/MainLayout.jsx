import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
// import Footer from '../Component/Shared/Footer/Footer'
// import Navbar from '../Component/Shared/Navbar/Navbar'
const MainLayout = () => {
  return (
    <div className='bg-green-50'>

      <Navbar/>
      <div className=' min-h-[calc(100vh-68px)] mt-5 '>

        <Outlet />
      </div>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default MainLayout
