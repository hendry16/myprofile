import Navbar from "../components/Navbar"
import Header from "../layouts/Header"
import Profile from "../components/Profile"
import Content from "../components/Content"
import HomeContent from "../contents/HomeContent"

const Home = () => {
  return (
    <>
      <Header />
      <div className="lg:flex">
        <Profile />
        <div className="w-full">
          <HomeContent />
        </div>
      </div>
    </>
  )
}

export default Home;