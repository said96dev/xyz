import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar, SmallSidebar, Footer } from '../../components'
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="">
        <SmallSidebar />
        <div>
          <Navbar />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </Wrapper>
  )
}
export default SharedLayout
